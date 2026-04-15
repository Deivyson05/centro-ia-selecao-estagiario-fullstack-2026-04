from fastapi import HTTPException
from api.services.prestador_service import PrestadorService
from api.schemas.prestador_schema import PrestadorCreate, PrestadorResponse
from api.schemas.prestador_schema import PrestadorResponse

class PrestadorController:
    def __init__(self, service: PrestadorService):
        self.service = service

    def create(self, data: PrestadorCreate) -> PrestadorResponse:
        return self.service.create(data)
