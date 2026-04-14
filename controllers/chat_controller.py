from services.chat_service import ChatService
from fastapi import HTTPException, status

class ChatController:
    def __init__(self, service: ChatService):
        self.service = service

    def chat(self, message: str) -> str:
        if not message.strip():
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Mensagem vazia!")
        return self.service.send_message(message)