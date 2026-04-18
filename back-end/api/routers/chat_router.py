from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from api.database import get_db, SessionLocal
from api.services.chat_service import ChatService
from api.controllers.chat_controller import ChatController
from api.schemas.chat_schema import ChatRequest
from api.services.prestador_service import PrestadorService
from api.services.horario_marcado_service import HorarioMarcadoService
from api.repository.prestador_repository import PrestadorRepository
from api.repository.horario_marcado_repository import HorarioMarcadoRepository

router = APIRouter(prefix="/chat", tags=["chat"])

# cria uma sessão dedicada pro chat service
_db = SessionLocal()
_chat_service = ChatService(
    prestador_service=PrestadorService(PrestadorRepository(_db)),
    horario_marcado_service=HorarioMarcadoService(HorarioMarcadoRepository(_db))
)

@router.post("/")
def chat(req: ChatRequest):
    ctrl = ChatController(_chat_service)
    # atualiza o db a cada request
    _db.expire_all()
    return {"message": ctrl.chat(req.message, req.session_id)}