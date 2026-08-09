from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.tourist import Tourist
from app.schemas.auth import TouristLogin
from app.authentication.security import (
    verify_password,
    create_access_token
)

router = APIRouter(
    prefix="/api/auth",
    tags=["Authentication"]
)


@router.post("/login")
def tourist_login(
    login_data: TouristLogin,
    db: Session = Depends(get_db)
):
    tourist = db.query(Tourist).filter(
        Tourist.email == login_data.email
    ).first()

    if not tourist:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password"
        )

    if not verify_password(
        login_data.password,
        tourist.password_hash
    ):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password"
        )

    access_token = create_access_token(
        data={
            "sub": str(tourist.id),
            "role": "tourist"
        }
    )

    return {
        "access_token": access_token,
        "token_type": "bearer",
        "tourist_id": tourist.id,
        "full_name": tourist.full_name
    }