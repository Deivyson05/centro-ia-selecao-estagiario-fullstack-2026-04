from api.repository.prestador_repository import PrestadorRepository
from api.schemas.prestador_schema import PrestadorCreate, PrestadorResponse

class PrestadorService:
    def __init__(self, repository: PrestadorRepository):
        self.repository = repository

    def create(self, data: PrestadorCreate) -> PrestadorResponse:
        prestador = self.repository.create(data)
        return PrestadorResponse.model_validate(prestador)