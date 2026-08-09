from fastapi import APIRouter, Depends
from app.dependencies.auth import get_current_tourist
from app.models.tourist import Tourist


router = APIRouter(
    prefix="/api/profile",
    tags=["Profile"]
)


@router.get("/me")
def get_my_profile(
    current_tourist: Tourist = Depends(get_current_tourist)
):
    return {
        "success": True,
        "tourist": {
            "id": current_tourist.id,
            "full_name": current_tourist.full_name,
            "email": current_tourist.email,
            "phone": current_tourist.phone,
            "emergency_contact_name": current_tourist.emergency_contact_name,
            "emergency_contact_phone": current_tourist.emergency_contact_phone,
            "nationality": current_tourist.nationality,
        }
    }