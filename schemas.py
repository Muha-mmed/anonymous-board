from pydantic import BaseModel

class CreatePostSchema(BaseModel):
    content : str
    
class PostSchema(BaseModel):
    content : str
    
    class Config:
        from_attributes: True