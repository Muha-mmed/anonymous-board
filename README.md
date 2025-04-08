# 📝 Anonymous Board API

A simple FastAPI-powered backend that lets users create and share anonymous posts through unique links.

---

## 🚀 Features

- ✅ Create anonymous posts
- 🔗 Generate unique links for each post
- 🔍 Retrieve posts by link
- 🛠 Built with FastAPI, SQLAlchemy, and Pydantic

---

## 📦 Requirements

- Python 3.8+
- FastAPI
- SQLAlchemy
- Uvicorn

### Install dependencies

```bash
pip install fastapi sqlalchemy uvicorn

```
## Create Post
```json
{
"content": "your anonymous message here"
}
    ```
## Response
```json
{
    "content": "your anonymous message here",
    "link": "127.0.0.1:8000/read/anonymous-dd3c"
}
```
## Read Post

- "127.0.0.1:8000/read/{add_post.link}"

## response
```json
{
"content": "your anonymous message here"
}
```
## Run the app

```bash 
uvicorn main:app --reload
