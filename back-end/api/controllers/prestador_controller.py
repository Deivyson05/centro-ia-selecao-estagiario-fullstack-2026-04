from fastapi import HTTPException
from api.services.prestador_service import PrestadorService
from api.schemas.prestador_schema import PrestadorCreate, PrestadorResponse

class PrestadorController:
    def __init__(self, service: PrestadorService):
        self.service = service

    def create(self, data: PrestadorCreate) -> PrestadorResponse:
        try:
            prestador = self.service.create(data)
            return PrestadorResponse.model_validate(prestador)
        except Exception as e:
            raise HTTPException(status_code=400, detail=str(e))

    def get_by_id(self, prestador_id: int) -> PrestadorResponse:
        prestador = self.service.get_by_id(prestador_id)
        if prestador:
            return PrestadorResponse.model_validate(prestador)
        raise HTTPException(status_code=404, detail="Prestador não encontrado")
    
    def get_all(self) -> list[PrestadorResponse]:
        prestadores = self.service.get_all()
        return [PrestadorResponse.model_validate(p) for p in prestadores]
    
    def delete(self, prestador_id: int) -> None:
        try:
            self.service.delete(prestador_id)
        except Exception as e:
            raise HTTPException(status_code=400, detail=str(e))
