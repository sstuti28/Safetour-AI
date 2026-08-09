from sqlalchemy import Column, Integer, Float, DateTime, ForeignKey
from sqlalchemy.sql import func

from app.database import Base


class TouristLocation(Base):
    __tablename__ = "tourist_locations"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    tourist_id = Column(
        Integer,
        ForeignKey("tourists.id"),
        nullable=False,
        index=True
    )

    latitude = Column(
        Float,
        nullable=False
    )

    longitude = Column(
        Float,
        nullable=False
    )

    accuracy = Column(
        Float,
        nullable=True
    )

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
        nullable=False
    )