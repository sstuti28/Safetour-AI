from pydantic import BaseModel, EmailStr, Field
from typing import Optional


class TouristRegister(BaseModel):
    full_name: str = Field(..., min_length=2, max_length=100)

    email: EmailStr

    phone: str = Field(..., min_length=10, max_length=20)

    password: str = Field(..., min_length=8, max_length=100)

    emergency_contact_name: Optional[str] = Field(
        default=None,
        max_length=100
    )

    emergency_contact_phone: Optional[str] = Field(
        default=None,
        max_length=20
    )

    nationality: Optional[str] = Field(
        default=None,
        max_length=100
    )


class TouristResponse(BaseModel):
    id: int
    full_name: str
    email: str
    phone: str
    emergency_contact_name: Optional[str] = None
    emergency_contact_phone: Optional[str] = None
    nationality: Optional[str] = None

    class Config:
        from_attributes = True