from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from passlib.context import CryptContext

from app.database import get_db
from app.models.tourist import Tourist
from app.schemas.tourist import TouristRegister, TouristResponse


router = APIRouter(
    prefix="/api/tourists",
    tags=["Tourists"]
)


# Argon2 password hashing
pwd_context = CryptContext(
    schemes=["argon2"],
    deprecated="auto"
)


@router.post(
    "/register",
    response_model=TouristResponse
)
def register_tourist(
    tourist_data: TouristRegister,
    db: Session = Depends(get_db)
):

    # Check existing email
    existing_email = db.query(Tourist).filter(
        Tourist.email == tourist_data.email
    ).first()

    if existing_email:
        raise HTTPException(
            status_code=400,
            detail="Email already registered"
        )

    # Check existing phone
    existing_phone = db.query(Tourist).filter(
        Tourist.phone == tourist_data.phone
    ).first()

    if existing_phone:
        raise HTTPException(
            status_code=400,
            detail="Phone number already registered"
        )

    # Hash password using Argon2
    try:
        password_hash = pwd_context.hash(
            tourist_data.password
        )

    except Exception as e:
        print("PASSWORD HASH ERROR:", repr(e))

        raise HTTPException(
            status_code=500,
            detail=f"Password hashing error: {str(e)}"
        )

    # Create tourist
    tourist = Tourist(
        full_name=tourist_data.full_name,
        email=tourist_data.email,
        phone=tourist_data.phone,
        password_hash=password_hash,
        emergency_contact_name=tourist_data.emergency_contact_name,
        emergency_contact_phone=tourist_data.emergency_contact_phone,
        nationality=tourist_data.nationality
    )

    # Save to database
    try:
        db.add(tourist)
        db.commit()
        db.refresh(tourist)

    except Exception as e:
        db.rollback()

        print("DATABASE ERROR:", repr(e))

        raise HTTPException(
            status_code=500,
            detail=f"Database error: {str(e)}"
        )

    return tourist