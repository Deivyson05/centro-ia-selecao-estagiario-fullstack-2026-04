from api.repository.prestador_repository import PrestadorRepository
from api.schemas.prestador_schema import PrestadorCreate, PrestadorResponse

class PrestadorService:
    def __init__(self, repository: PrestadorRepository):
        self.repository = repository

    def create(self, data: PrestadorCreate) -> PrestadorResponse:
        prestador = self.repository.create(data)
        return PrestadorResponse.model_validate(prestador)
    
    def get_by_id(self, prestador_id: int) -> PrestadorResponse | None:
        prestador = self.repository.get_by_id(prestador_id)
        if prestador:
            return PrestadorResponse.model_validate(prestador)
        return None
    
    def get_all(self) -> list[PrestadorResponse]:
        prestadores = self.repository.get_all()
        return [PrestadorResponse.model_validate(p) for p in prestadores]
    
    def delete(self, prestador_id: int) -> None:
        self.repository.delete(prestador_id)

    def update(self, prestador_id: int, data: PrestadorCreate) -> PrestadorResponse | None:
        prestador = self.repository.update(prestador_id, data)
        if prestador:
            return PrestadorResponse.model_validate(prestador)
        return None
    
    def get_by_servico(self, servico: str) -> list[PrestadorResponse]:
        prestadores = self.repository.get_prestadores_by_servico(servico)
        return [PrestadorResponse.model_validate(p) for p in prestadores]
    
    def get_servicos_disponiveis(self) -> list[str]:
        return self.repository.get_servicos_disponiveis()