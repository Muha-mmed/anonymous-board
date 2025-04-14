from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

import os
from dotenv import load_dotenv

load_dotenv()


Database_url = os.getenv("Database_url")

engine = create_engine(Database_url)

local_session = sessionmaker(bind=engine,autocommit=False,autoflush=False)

Base = declarative_base()

def get_db():
    db = local_session()
    try:
        yield db
    finally:
        db.close()