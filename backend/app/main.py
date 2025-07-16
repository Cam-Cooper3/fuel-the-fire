# ----------------------------------------------------------------------
# file: backend/app/main.py
# ----------------------------------------------------------------------
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .core.db import create_db_and_tables
from .modules.users import router as users_router

# Create the FastAPI app instance
app = FastAPI(title="Meal Prep Service API")

# Add CORS middleware to allow the frontend to communicate with the backend
# This is crucial for local development.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"], # Adjust to your React dev server URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def on_startup():
    # This function runs when the application starts.
    # It creates the database and tables if they don't exist.
    create_db_and_tables()

# Include the routers from the different modules
app.include_router(users_router.router)

@app.get("/")
def read_root():
    """A simple health check endpoint."""
    return {"status": "ok", "message": "Welcome to the Meal Prep Service API"}
