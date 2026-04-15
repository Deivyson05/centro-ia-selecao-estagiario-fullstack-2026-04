from fastapi import HTTPException
from services.prestador_service import PrestadorService
from schemas.prestador_schema import PrestadorCreate, PrestadorResponse
from schemas.prestador_schema import PrestadorResponse

class PrestadorController:
    def __init__(self, service: PrestadorService):
        self.service = service

    def create(self, data: PrestadorCreate) -> PrestadorResponse:
        return self.service.create(data)
