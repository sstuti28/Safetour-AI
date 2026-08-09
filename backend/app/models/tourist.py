from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.sql import func

from app.database import Base


class Tourist(Base):
    __tablename__ = "tourists"

    id = Column(Integer, primary_key=True, index=True)

    full_name = Column(String(100), nullable=False)

    email = Column(String(150), unique=True, nullable=False, index=True)

    phone = Column(String(20), unique=True, nullable=False)

    password_hash = Column(String(255), nullable=True)

    emergency_contact_name = Column(String(100), nullable=True)

    emergency_contact_phone = Column(String(20), nullable=True)

    nationality = Column(String(100), nullable=True)

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )