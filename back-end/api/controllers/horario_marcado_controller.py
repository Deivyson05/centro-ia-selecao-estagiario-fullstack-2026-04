from fastapi import HTTPException
from api.services.horario_marcado_service import HorarioMarcadoService
from api.schemas.horario_marcado_schema import HorarioMarcadoCreate, HorarioMarcadoResponse

class HorarioMarcadoController:
    def __init__(self, service: HorarioMarcadoService):
        self.service = service

    def create(self, data: HorarioMarcadoCreate) -> HorarioMarcadoResponse:
        try:
            horario_marcado = self.service.create(data)
            return HorarioMarcadoResponse.model_validate(horario_marcado)
        except Exception as e:
            raise HTTPException(status_code=400, detail=str(e))
        
    def get_all(self) -> list[HorarioMarcadoResponse]:
        try:
            horarios_marcados = self.service.get_all()
            return [HorarioMarcadoResponse.model_validate(horario_marcado) for horario_marcado in horarios_marcados]
        except Exception as e:
            raise HTTPException(status_code=400, detail=str(e))
        
    def update(self, horario_marcado: HorarioMarcadoResponse) -> HorarioMarcadoResponse:
        try:
            updated_horario_marcado = self.service.update(horario_marcado)
            return HorarioMarcadoResponse.model_validate(updated_horario_marcado)
        except Exception as e:
            raise HTTPException(status_code=400, detail=str(e))
        
    def delete(self, horario_marcado: HorarioMarcadoResponse) -> None:
        try:
            self.service.delete(horario_marcado)
        except Exception as e:
            raise HTTPException(status_code=400, detail=str(e))