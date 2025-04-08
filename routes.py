
from fastapi import APIRouter, HTTPException,Depends
from sqlalchemy.orm import Session


from model import Post
from db import get_db
from schemas import PostSchema
router = APIRouter()

db_dependency: Session = Depends(get_db)

@router.post("/post")
def create_post(post: PostSchema,db:Session=db_dependency):
    add_post = Post(content =post.content)
    if not add_post:
        raise HTTPException(status_code=409,detail="conflict")
    db.add(add_post)
    db.commit()
    db.refresh(add_post)
    return {"content" : add_post.content,
            "link": f"127.0.0.1:8000/read/{add_post.link}"
            }    

@router.get("/read/{link}")
def create_post(link: str,db:Session=db_dependency):
    post = db.query(Post).filter(Post.link == link).first()
    if not post:
        raise HTTPException(status_code=404,detail="hey link don't exist")
    return {"content": post.content}  