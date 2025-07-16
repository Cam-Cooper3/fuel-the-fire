# ----------------------------------------------------------------------
# file: backend/app/core/db.py
# ----------------------------------------------------------------------
from sqlmodel import create_engine, SQLModel
import os

# For local development, we use SQLite as planned.
DATABASE_URL = "sqlite:///./mealprep.db"

# The connect_args are needed only for SQLite to allow multiple threads.
engine = create_engine(DATABASE_URL, echo=True, connect_args={"check_same_thread": False})

def create_db_and_tables():
    # This function will create the database file and all tables.
    SQLModel.metadata.create_all(engine)