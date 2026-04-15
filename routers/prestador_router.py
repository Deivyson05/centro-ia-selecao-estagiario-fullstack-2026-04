from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
from controllers.prestador_controller import PrestadorController
from services.prestador_service import PrestadorService
from repository.prestador_repository import PrestadorRepository
from schemas.prestador_schema import PrestadorCreate, PrestadorResponse

router = APIRouter(prefix="/prestadores", tags=["Prestadores"])

def get_controller(db: Session = Depends(get_db)) -> PrestadorController:
    repository = PrestadorRepository(db)
    service = PrestadorService(repository)
    return PrestadorController(service)

@router.post("/", response_model=PrestadorResponse, status_code=201)
def create_prestador(data: PrestadorCreate, ctrl: PrestadorController = Depends(get_controller)):
    return ctrl.create(data)