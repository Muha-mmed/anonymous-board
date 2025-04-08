from sqlalchemy import Column,String,Integer

from uuid import uuid4

from db import Base,engine

class Post(Base):
    __tablename__ = "posts"

    id = Column(Integer,primary_key=True,auto_increase=True)
    content = Column(String,nullable=False)
    link = Column(String,nullable=False,unique=True,default=f"anonymous-{uuid4().hex[:4]}")

Base.metadata.create_all(engine)