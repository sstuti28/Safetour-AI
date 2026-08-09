from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.openapi.utils import get_openapi

from app.routers.emergency import router as emergency_router
from app.routers.tourist import router as tourist_router
from app.routers.auth import router as auth_router
from app.routers.profile import router as profile_router


app = FastAPI(
    title="Safetour AI",
    description="Smart Tourist Safety Monitoring and Early Warning System using AI",
    version="1.0.0",
)


# =========================
# CORS CONFIGURATION
# =========================

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# =========================
# API ROUTERS
# =========================

app.include_router(emergency_router)
app.include_router(tourist_router)
app.include_router(auth_router)
app.include_router(profile_router)


# =========================
# ROOT API
# =========================

@app.get("/")
def root():
    return {
        "success": True,
        "message": "Safetour AI Backend is running",
        "project": "SIH25002",
    }


# =========================
# HEALTH CHECK
# =========================

@app.get("/api/health")
def health_check():
    return {
        "success": True,
        "status": "healthy",
        "service": "Safetour AI Backend",
    }


# =========================
# OPENAPI SECURITY
# =========================

def custom_openapi():
    if app.openapi_schema:
        return app.openapi_schema

    openapi_schema = get_openapi(
        title="Safetour AI",
        version="1.0.0",
        description="Smart Tourist Safety Monitoring and Early Warning System using AI",
        routes=app.routes,
    )

    openapi_schema["components"]["securitySchemes"] = {
        "HTTPBearer": {
            "type": "http",
            "scheme": "bearer",
            "bearerFormat": "JWT",
        }
    }

    # Add Bearer security to protected endpoints
    protected_paths = [
        "/api/profile/me",
        "/api/emergency/sos",
    ]

    for path in protected_paths:
        if path in openapi_schema["paths"]:
            for method in openapi_schema["paths"][path]:
                if method in [
                    "get",
                    "post",
                    "put",
                    "delete",
                    "patch",
                ]:
                    openapi_schema["paths"][path][method]["security"] = [
                        {
                            "HTTPBearer": []
                        }
                    ]

    app.openapi_schema = openapi_schema

    return app.openapi_schema


app.openapi = custom_openapi