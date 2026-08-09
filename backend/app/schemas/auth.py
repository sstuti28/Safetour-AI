from pydantic import BaseModel, EmailStr, Field


class TouristLogin(BaseModel):
    email: EmailStr
    password: str = Field(..., min_length=1)


class TokenResponse(BaseModel):
    access_token: str
    token_type: str
    tourist_id: int
    full_name: str