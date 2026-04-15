from fastapi import FastAPI
from routers import chat_router, prestador_router
from database import engine, Base
from models import prestador

Base.metadata.create_all(bind=engine)

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

app.include_router(chat_router.router)
app.include_router(prestador_router.router)

#uvicorn main:app --reload