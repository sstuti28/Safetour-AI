from app.database import engine, Base

from app.models.tourist import Tourist
from app.models.location import TouristLocation
from app.models.emergency_alert import EmergencyAlert


print("Creating database tables...")

try:
    Base.metadata.create_all(bind=engine)

    print("DATABASE TABLES CREATED SUCCESSFULLY!")

except Exception as e:
    print("DATABASE TABLE CREATION FAILED:")
    print(e)