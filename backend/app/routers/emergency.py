from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy.sql import func

from app.database import get_db
from app.dependencies.auth import get_current_tourist
from app.models.emergency_alert import EmergencyAlert
from app.models.tourist import Tourist


router = APIRouter(
    prefix="/api/emergency",
    tags=["Emergency"]
)


# =========================================================
# CREATE SOS
# =========================================================

@router.post("/sos")
def create_sos(
    latitude: float,
    longitude: float,
    alert_type: str = "SOS",
    severity: str = "critical",
    message: str | None = None,
    current_tourist: Tourist = Depends(get_current_tourist),
    db: Session = Depends(get_db)
):
    emergency = EmergencyAlert(
        tourist_id=current_tourist.id,
        alert_type=alert_type,
        severity=severity,
        latitude=latitude,
        longitude=longitude,
        message=message,
        status="active"
    )

    try:
        db.add(emergency)
        db.commit()
        db.refresh(emergency)

    except Exception as e:
        db.rollback()

        print("SOS DATABASE ERROR:", repr(e))

        raise HTTPException(
            status_code=500,
            detail=f"Could not create emergency alert: {str(e)}"
        )

    return {
        "success": True,
        "message": "SOS emergency created successfully",
        "emergency_id": emergency.id,
        "tourist_id": current_tourist.id,
        "status": emergency.status,
        "location": {
            "latitude": emergency.latitude,
            "longitude": emergency.longitude
        }
    }


# =========================================================
# GET MY EMERGENCY ALERTS
# =========================================================

@router.get("/my-alerts")
def get_my_alerts(
    current_tourist: Tourist = Depends(get_current_tourist),
    db: Session = Depends(get_db)
):
    alerts = (
        db.query(EmergencyAlert)
        .filter(
            EmergencyAlert.tourist_id == current_tourist.id
        )
        .order_by(EmergencyAlert.created_at.desc())
        .all()
    )

    return {
        "success": True,
        "count": len(alerts),
        "alerts": [
            {
                "id": alert.id,
                "alert_type": alert.alert_type,
                "severity": alert.severity,
                "latitude": alert.latitude,
                "longitude": alert.longitude,
                "message": alert.message,
                "status": alert.status,
                "created_at": alert.created_at,
                "resolved_at": alert.resolved_at
            }
            for alert in alerts
        ]
    }


# =========================================================
# GET SINGLE EMERGENCY
# =========================================================

@router.get("/{emergency_id}")
def get_emergency(
    emergency_id: int,
    current_tourist: Tourist = Depends(get_current_tourist),
    db: Session = Depends(get_db)
):
    emergency = (
        db.query(EmergencyAlert)
        .filter(
            EmergencyAlert.id == emergency_id,
            EmergencyAlert.tourist_id == current_tourist.id
        )
        .first()
    )

    if not emergency:
        raise HTTPException(
            status_code=404,
            detail="Emergency alert not found"
        )

    return {
        "success": True,
        "alert": {
            "id": emergency.id,
            "alert_type": emergency.alert_type,
            "severity": emergency.severity,
            "latitude": emergency.latitude,
            "longitude": emergency.longitude,
            "message": emergency.message,
            "status": emergency.status,
            "created_at": emergency.created_at,
            "resolved_at": emergency.resolved_at
        }
    }


# =========================================================
# RESOLVE EMERGENCY
# =========================================================

@router.put("/{emergency_id}/resolve")
def resolve_emergency(
    emergency_id: int,
    current_tourist: Tourist = Depends(get_current_tourist),
    db: Session = Depends(get_db)
):
    emergency = (
        db.query(EmergencyAlert)
        .filter(
            EmergencyAlert.id == emergency_id,
            EmergencyAlert.tourist_id == current_tourist.id
        )
        .first()
    )

    if not emergency:
        raise HTTPException(
            status_code=404,
            detail="Emergency alert not found"
        )

    if emergency.status == "resolved":
        return {
            "success": True,
            "message": "Emergency is already resolved",
            "emergency_id": emergency.id,
            "status": emergency.status,
            "resolved_at": emergency.resolved_at
        }

    emergency.status = "resolved"
    emergency.resolved_at = func.now()

    try:
        db.commit()
        db.refresh(emergency)

    except Exception as e:
        db.rollback()

        print("RESOLVE EMERGENCY ERROR:", repr(e))

        raise HTTPException(
            status_code=500,
            detail=f"Could not resolve emergency: {str(e)}"
        )

    return {
        "success": True,
        "message": "Emergency resolved successfully",
        "emergency_id": emergency.id,
        "status": emergency.status,
        "resolved_at": emergency.resolved_at
    }