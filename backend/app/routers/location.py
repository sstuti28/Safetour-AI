from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.dependencies.auth import get_current_tourist
from app.models.location import TouristLocation
from app.models.tourist import Tourist


router = APIRouter(
    prefix="/api/location",
    tags=["Location"]
)


# =========================================================
# UPDATE TOURIST LOCATION
# =========================================================

@router.post("/update")
def update_location(
    latitude: float,
    longitude: float,
    accuracy: float | None = None,
    current_tourist: Tourist = Depends(get_current_tourist),
    db: Session = Depends(get_db)
):

    location = TouristLocation(
        tourist_id=current_tourist.id,
        latitude=latitude,
        longitude=longitude,
        accuracy=accuracy
    )

    try:
        db.add(location)
        db.commit()
        db.refresh(location)

    except Exception as e:
        db.rollback()

        print("LOCATION DATABASE ERROR:", repr(e))

        raise HTTPException(
            status_code=500,
            detail=f"Could not save location: {str(e)}"
        )

    return {
        "success": True,
        "message": "Location updated successfully",
        "location_id": location.id,
        "tourist_id": current_tourist.id,
        "location": {
            "latitude": location.latitude,
            "longitude": location.longitude,
            "accuracy": location.accuracy
        },
        "created_at": location.created_at
    }


# =========================================================
# GET CURRENT LOCATION
# =========================================================

@router.get("/current")
def get_current_location(
    current_tourist: Tourist = Depends(get_current_tourist),
    db: Session = Depends(get_db)
):

    location = (
        db.query(TouristLocation)
        .filter(
            TouristLocation.tourist_id == current_tourist.id
        )
        .order_by(TouristLocation.created_at.desc())
        .first()
    )

    if not location:
        raise HTTPException(
            status_code=404,
            detail="No location data found"
        )

    return {
        "success": True,
        "location": {
            "id": location.id,
            "latitude": location.latitude,
            "longitude": location.longitude,
            "accuracy": location.accuracy,
            "created_at": location.created_at
        }
    }


# =========================================================
# GET LOCATION HISTORY
# =========================================================

@router.get("/history")
def get_location_history(
    limit: int = 50,
    current_tourist: Tourist = Depends(get_current_tourist),
    db: Session = Depends(get_db)
):

    if limit < 1:
        limit = 1

    if limit > 200:
        limit = 200

    locations = (
        db.query(TouristLocation)
        .filter(
            TouristLocation.tourist_id == current_tourist.id
        )
        .order_by(TouristLocation.created_at.desc())
        .limit(limit)
        .all()
    )

    return {
        "success": True,
        "count": len(locations),
        "locations": [
            {
                "id": location.id,
                "latitude": location.latitude,
                "longitude": location.longitude,
                "accuracy": location.accuracy,
                "created_at": location.created_at
            }
            for location in locations
        ]
    }