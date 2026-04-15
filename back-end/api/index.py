from fastapi import FastAPI
from api.routers import chat_router, prestador_router
from api.database import engine, Base
from api.models import prestador

Base.metadata.create_all(bind=engine)

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

app.include_router(chat_router.router)
app.include_router(prestador_router.router)

def handler(request, context):
    return app
#uvicorn main:app --reload