# ----------------------------------------------------------------------
# file: backend/app/models.py
# ----------------------------------------------------------------------
from sqlmodel import Field, SQLModel
from typing import Optional
import datetime as dt

class User(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    email: str = Field(index=True, unique=True)
    hashed_password: str
    full_name: str
    phone_number: Optional[str] = None
    created_at: dt.datetime = Field(default_factory=dt.datetime.utcnow, nullable=False)