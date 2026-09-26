
🛡️ Safetour AI
 Smart Tourist Safety Monitoring and Early Warning System using AI

Safetour AI is a smart web-based tourist safety platform designed to monitor tourists in real time and provide early warnings about potential safety risks.

The system combines GPS location tracking, weather monitoring, geofencing, emergency SOS, AI-based risk analysis, safety alerts, and an authority dashboard to improve tourist safety and emergency response.

---

## 🚀 Features

### 👤 Tourist Features

- Tourist registration and login
- JWT-based authentication
- Tourist profile management
- Live GPS location tracking
- Location history
- Current location monitoring
- Emergency SOS button
- Real-time safety risk calculation
- Weather-based risk detection
- Unsafe/danger zone detection
- Safety alerts
- Safe route and danger-zone map
- Emergency contact information

### 🚨 Emergency SOS

Tourists can trigger an emergency SOS directly from the dashboard.

The system:

1. Gets the tourist's current GPS location
2. Sends the location to the backend
3. Creates an emergency alert
4. Stores emergency information
5. Allows authorities to monitor the emergency

### 🌦️ Weather Monitoring

Safetour AI retrieves current weather information and calculates weather risk based on:

- Temperature
- Rainfall
- Wind speed

Weather risk levels are:

- LOW
- MEDIUM
- HIGH
- CRITICAL

### 🤖 AI Risk Engine

The AI Risk Engine combines multiple safety factors to calculate a tourist's risk score.

The engine considers:

- Weather risk
- Unsafe/geofenced zones
- Active emergency/SOS
- GPS accuracy
- Remote-area status

Example:

```text
Weather Risk       → High
Unsafe Zone        → High
Emergency          → No
GPS Accuracy       → Good
Remote Area        → Yes

          ↓

     AI Risk Engine

          ↓

     Risk Score

          ↓

Low / Medium / High / Critical
````

### 🗺️ Geofencing

The system supports geographical safety zones.

A safety zone can contain:

* Zone name
* Description
* Zone type
* Severity
* Latitude
* Longitude
* Radius
* Active/inactive status

This allows the system to identify when a tourist enters an unsafe area.

### 👮 Authority Dashboard

Authorities can monitor:

* Tourist locations
* Emergency alerts
* Safety alerts
* Tourist information
* Risk information

---

# 🏗️ System Architecture

```text
                    ┌─────────────────────┐
                    │      Tourist        │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   React Frontend    │
                    │     Dashboard       │
                    └──────────┬──────────┘
                               │
                          REST APIs
                               │
                               ▼
                    ┌─────────────────────┐
                    │   FastAPI Backend   │
                    └──────────┬──────────┘
                               │
          ┌────────────────────┼────────────────────┐
          │                    │                    │
          ▼                    ▼                    ▼
   ┌─────────────┐      ┌─────────────┐      ┌─────────────┐
   │ GPS/Location│      │   Weather   │      │ Emergency   │
   │   Service   │      │   Service   │      │   / SOS     │
   └─────────────┘      └─────────────┘      └─────────────┘
          │                    │                    │
          └────────────────────┼────────────────────┘
                               ▼
                    ┌─────────────────────┐
                    │    AI Risk Engine   │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   Safety Alerts     │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ Supabase PostgreSQL │
                    └─────────────────────┘
```

---

# 🛠️ Technology Stack

## Frontend

* React.js
* Vite
* JavaScript
* Tailwind CSS
* React Router
* React Icons
* Framer Motion
* Browser Geolocation API

## Backend

* Python
* FastAPI
* SQLAlchemy
* JWT Authentication
* OAuth2
* REST APIs
* Uvicorn

## Database

* PostgreSQL
* Supabase

## Safety and AI

* AI-based risk calculation engine
* Weather risk analysis
* Geofencing
* GPS monitoring
* Emergency detection
* Automated safety alerts

---

# 🔌 API Endpoints

## Authentication

```text
POST /api/auth/login
POST /api/tourists/register
```

## Location

```text
POST /api/location/update
GET  /api/location/current
GET  /api/location/history
GET  /api/location/authority/all
```

## Emergency

```text
POST /api/emergency/sos
```

## Weather

```text
GET /api/weather/current
GET /api/weather/risk
GET /api/weather/alerts
GET /api/weather/health
```

## AI Risk Engine

```text
GET /api/risk/calculate
GET /api/risk/health
```

## General

```text
GET /
GET /api/health
```

---

# 📊 AI Risk Calculation

The risk engine assigns points to different safety conditions.

Example risk factors:

| Factor               | Risk Contribution |
| -------------------- | ----------------: |
| Medium Weather       |               +15 |
| High Weather         |               +25 |
| Critical Weather     |               +40 |
| Medium Unsafe Zone   |               +20 |
| High Unsafe Zone     |               +30 |
| Critical Unsafe Zone |               +40 |
| Active Emergency     |               +50 |
| Poor GPS Accuracy    |                +5 |
| Remote Area          |               +10 |

The final risk score is limited between 0 and 100.

### Risk Levels

```text
0 – 29     → LOW
30 – 59    → MEDIUM
60 – 79    → HIGH
80 – 100   → CRITICAL
```

---

# 📍 Location Tracking

Safetour AI uses the browser's Geolocation API to obtain the tourist's:

* Latitude
* Longitude
* GPS accuracy

The location is sent to the FastAPI backend and stored in the database.

Location APIs:

```text
POST /api/location/update
GET  /api/location/current
GET  /api/location/history
```

The authority dashboard can retrieve the latest location of tourists using:

```text
GET /api/location/authority/all
```

---

# 🚨 SOS Flow

```text
Tourist presses SOS
        ↓
Browser requests GPS
        ↓
Latitude + Longitude
        ↓
FastAPI SOS API
        ↓
Emergency Alert Created
        ↓
Database
        ↓
Authority Dashboard
```

The frontend sends the JWT token with the request:

```http
Authorization: Bearer <access_token>
```

---

# 🌦️ Weather Risk Flow

```text
Current GPS Location
        ↓
Weather Service
        ↓
Temperature
Rainfall
Wind Speed
        ↓
Weather Risk Calculator
        ↓
LOW / MEDIUM / HIGH / CRITICAL
        ↓
Weather Alert
```

---

# 🤖 AI Risk Flow

```text
GPS Location
      │
      ├── Weather Risk
      │
      ├── Unsafe Zone
      │
      ├── Emergency Status
      │
      ├── GPS Accuracy
      │
      └── Remote Area
              │
              ▼
       AI Risk Engine
              │
              ▼
          Risk Score
              │
              ▼
    LOW / MEDIUM / HIGH / CRITICAL
              │
              ▼
        Safety Alert
```

---

# 🔐 Authentication Flow

```text
Tourist
   │
   ▼
Login
   │
   ▼
FastAPI Authentication
   │
   ▼
JWT Access Token
   │
   ▼
Frontend
   │
   ▼
Protected API Requests
```

Protected API requests use:

```http
Authorization: Bearer <access_token>
```

---

# 📁 Project Structure

```text
Safetour-AI/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── ...
│   │
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── app/
│   │   ├── models/
│   │   ├── routers/
│   │   ├── services/
│   │   ├── dependencies/
│   │   └── ...
│   │
│   ├── run.py
│   ├── requirements.txt
│   └── .env
│
├── .gitignore
└── README.md
```

---

# ⚙️ Installation

## 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/Safetour-AI.git
```

Go to the project folder:

```bash
cd Safetour-AI
```

---

# 🔧 Backend Setup

Go to the backend folder:

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv .venv
```

Activate the virtual environment on Windows:

```powershell
.\.venv\Scripts\Activate.ps1
```

Install dependencies:

```bash
pip install -r requirements.txt
```

---

# 🔑 Environment Variables

Create a `.env` file inside the backend folder.

```env
DATABASE_URL=your_supabase_database_url
SECRET_KEY=your_secret_key
```

Do not upload your real `.env` file to GitHub.

---

# ▶️ Start Backend

Run:

```bash
python -m uvicorn run:app --reload
```

The backend will run at:

```text
http://127.0.0.1:8000
```

---

# 📖 Swagger API Documentation

FastAPI automatically provides Swagger UI.

Open:

```text
http://127.0.0.1:8000/docs
```

You can test the backend APIs directly from Swagger.

---

# 💻 Frontend Setup

Open a new terminal.

Go to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the frontend:

```bash
npm run dev
```

The frontend will normally run at:

```text
http://localhost:5173
```

---

# 🧪 Testing

The backend APIs can be tested using:

* Swagger UI
* Browser
* Frontend dashboard
* REST API requests

Swagger:

```text
http://127.0.0.1:8000/docs
```

Health check:

```text
GET /api/health
```

Risk engine health:

```text
GET /api/risk/health
```

Weather service health:

```text
GET /api/weather/health
```

---

# 🎯 Problem Statement

Tourists travelling through remote, mountainous, coastal, forest and disaster-prone regions can face different safety risks such as:

* Getting lost
* Unsafe routes
* Bad weather
* Landslides
* Floods
* Remote locations
* Delayed emergency response
* Lack of real-time safety information

Traditional emergency systems often depend on the tourist reporting an incident after it happens.

Safetour AI focuses on monitoring safety conditions and providing early warnings.

---

# 💡 Proposed Solution

Safetour AI provides a centralized platform that combines:

```text
GPS Tracking
      +
Weather Monitoring
      +
Geofencing
      +
AI Risk Analysis
      +
Emergency SOS
      +
Safety Alerts
      +
Authority Monitoring
```

The system analyzes these factors and provides a risk level to help tourists and authorities respond to potential safety situations.

---

# 🌟 What Makes Safetour AI Different?

Safetour AI combines multiple tourist-safety features into a single platform.

Instead of providing only an emergency button, the system also considers environmental and location-related conditions.

For example:

```text
Tourist enters unsafe zone
        +
Heavy rainfall
        +
Remote area
        ↓
AI Risk Engine
        ↓
Higher Risk Score
        ↓
Safety Alert
```

This allows the platform to support **early warning as well as emergency response**.

---

# 👮 Authority Monitoring

The authority dashboard provides centralized monitoring of tourist safety information.

Authorities can view:

* Tourist locations
* Emergency situations
* Safety alerts
* Risk information
* Location data

This can help authorities understand where assistance may be required.

---

# 🔮 Future Enhancements

Future versions can include:

* Blockchain-based digital tourist identity
* AI voice assistant
* Multi-language voice support
* Live traffic information
* Crowd-density analysis
* Tourist health and wearable integration
* Government alert integration
* AI-based safe-route recommendations
* Advanced machine-learning risk prediction
* Offline emergency support
* Automated authority notifications

---

# 👥 Project Information

**Project Name:** Safetour AI

**Official Project Title:** Smart Tourist Safety Monitoring and Early Warning System using AI

**Problem Statement ID:** SIH25002

**Theme:** Travel & Tourism

**Category:** Software

---

# 🔒 Security

The project uses JWT-based authentication for protected APIs.

Sensitive information such as:

* Database passwords
* Secret keys
* API keys
* Environment variables

should never be committed to GitHub.

Example `.gitignore`:

```gitignore
.env
.venv/
__pycache__/
node_modules/
dist/
*.pyc
```

---

# 📜 License

This project is developed for educational and hackathon purposes.

---

# 🛡️ Safetour AI

### Travel Safer. Detect Risks Earlier. Respond Faster.

```
```
