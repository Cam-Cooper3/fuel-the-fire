# ----------------------------------------------------------------------
# file: backend/app/modules/users/service.py
# ----------------------------------------------------------------------
from sqlmodel import Session, select
from ...models import User
from ...core.security import get_password_hash
from .schemas import UserCreate

def get_user_by_email(db: Session, email: str):
    """Fetches a user by their email address."""
    statement = select(User).where(User.email == email)
    return db.exec(statement).first()

def create_user(db: Session, user_data: UserCreate):
    """Creates a new user in the database."""
    hashed_password = get_password_hash(user_data.password)
    db_user = User(
        email=user_data.email,
        hashed_password=hashed_password,
        full_name=user_data.full_name,
        phone_number=user_data.phone_number
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user