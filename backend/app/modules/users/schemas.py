# ----------------------------------------------------------------------
# file: backend/app/modules/users/schemas.py
# ----------------------------------------------------------------------
from sqlmodel import SQLModel

# Schema for creating a new user (input)
class UserCreate(SQLModel):
    email: str
    password: str
    full_name: str
    phone_number: str | None = None

# Schema for reading user data (output)
class UserRead(SQLModel):
    id: int
    email: str
    full_name: str
    phone_number: str | None = None

# Schema for the login response
class Token(SQLModel):
    access_token: str
    token_type: str = "bearer"