from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey, Text
from sqlalchemy.sql import func

from app.database import Base


class EmergencyAlert(Base):
    __tablename__ = "emergency_alerts"

    id = Column(Integer, primary_key=True, index=True)

    tourist_id = Column(
        Integer,
        ForeignKey("tourists.id"),
        nullable=False,
        index=True
    )

    alert_type = Column(
        String(50),
        nullable=False
    )

    severity = Column(
        String(20),
        nullable=False,
        default="high"
    )

    latitude = Column(Float, nullable=False)

    longitude = Column(Float, nullable=False)

    message = Column(Text, nullable=True)

    status = Column(
        String(30),
        nullable=False,
        default="active"
    )

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )

    resolved_at = Column(
        DateTime(timezone=True),
        nullable=True
    )