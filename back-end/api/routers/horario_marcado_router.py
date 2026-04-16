from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from api.database import get_db
from api.controllers.horario_marcado_controller import HorarioMarcadoController
from api.services.horario_marcado_service import HorarioMarcadoService
from api.repository.horario_marcado_repository import HorarioMarcadoRepository
from api.schemas.horario_marcado_schema import HorarioMarcadoCreate, HorarioMarcadoResponse

router = APIRouter(prefix="/horarios_marcados", tags=["Horarios Marcados"])

def get_controller(db: Session = Depends(get_db)) -> HorarioMarcadoController:
    repository = HorarioMarcadoRepository(db)
    service = HorarioMarcadoService(repository)
    return HorarioMarcadoController(service)

@router.post("/", response_model=HorarioMarcadoResponse, status_code=201)
def create_horario_marcado(data: HorarioMarcadoCreate, ctrl: HorarioMarcadoController = Depends(get_controller)):
    return ctrl.create(data)

@router.get("/", response_model=list[HorarioMarcadoResponse])
def get_all_horarios_marcados(ctrl: HorarioMarcadoController = Depends(get_controller)):
    return ctrl.get_all()

@router.put("/", response_model=HorarioMarcadoResponse)
def update_horario_marcado(horario_marcado: HorarioMarcadoResponse, ctrl: HorarioMarcadoController = Depends(get_controller)):
    return ctrl.update(horario_marcado)

@router.delete("/{id}", status_code=204)
def delete_horario_marcado(id: int, ctrl: HorarioMarcadoController = Depends(get_controller)):
    # Assuming you have a method to fetch a horario_marcado by ID
    horario_marcado = ctrl.get_by_id(id)
    if not horario_marcado:
        raise HTTPException(status_code=404, detail="Horário marcado not found")
    ctrl.delete(horario_marcado)
    return None