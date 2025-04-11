from sqlalchemy import Column,String,Integer

from uuid import uuid4

from db import Base,engine

def generate_unique_link():
    return f"anonymous-{uuid4().hex[:4]}"

class Post(Base):
    __tablename__ = "posts"

    id = Column(Integer,primary_key=True,auto_increase=True)
    content = Column(String,nullable=False)
    link = Column(String,nullable=False,unique=True,default=generate_unique_link)

Base.metadata.create_all(engine)