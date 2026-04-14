from fastapi import APIRouter
from pydantic import BaseModel
from services.chat_service import ChatService
from controllers.chat_controller import ChatController

router = APIRouter(prefix="/chat", tags=["chat"])
controller = ChatController(service=ChatService())

class ChatRequest(BaseModel):
    message: str
@router.post("/")
def chat(req: ChatRequest):
    return {"message": controller.chat(req.message)}