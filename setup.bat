@echo off
REM Change the current directory to the script's directory to ensure paths are correct.
cd /d "%~dp0"

ECHO =======================================
ECHO  Setting up Fuel the Fire Environment
ECHO =======================================

REM --- Backend Setup ---
ECHO.
ECHO [1/2] Setting up Backend...
cd backend

REM Create venv if it doesn't exist
IF NOT EXIST venv (
    ECHO  - Creating Python virtual environment...
    python -m venv venv
)

ECHO  - Installing Python dependencies...
call venv\Scripts\activate.bat
pip install -r requirements.txt

ECHO  - Starting FastAPI server in a new window...
start "Backend Server" cmd /k "cd /d "%~dp0\backend" && venv\Scripts\activate.bat && uvicorn app.main:app --reload"

cd ..

REM --- Frontend Setup ---
ECHO.
ECHO [2/2] Setting up Frontend...
cd frontend

ECHO  - Installing Node dependencies...
npm install

ECHO  - Starting React development server...
ECHO.
ECHO =======================================
ECHO  Setup complete! Frontend server is starting now.
ECHO =======================================
npm run dev