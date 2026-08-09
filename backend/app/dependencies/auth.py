from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.tourist import Tourist
from app.authentication.security import decode_access_token


bearer_scheme = HTTPBearer(
    auto_error=True
)


def get_current_tourist(
    credentials: HTTPAuthorizationCredentials = Depends(bearer_scheme),
    db: Session = Depends(get_db)
):
    token = credentials.credentials

    payload = decode_access_token(token)

    if payload is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid or expired token",
            headers={
                "WWW-Authenticate": "Bearer"
            }
        )

    tourist_id = payload.get("sub")

    if tourist_id is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authentication token",
            headers={
                "WWW-Authenticate": "Bearer"
            }
        )

    try:
        tourist_id = int(tourist_id)
    except (ValueError, TypeError):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid tourist ID in token",
            headers={
                "WWW-Authenticate": "Bearer"
            }
        )

    tourist = db.query(Tourist).filter(
        Tourist.id == tourist_id
    ).first()

    if tourist is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Tourist account not found",
            headers={
                "WWW-Authenticate": "Bearer"
            }
        )

    return tourist