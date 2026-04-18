from api.repository.horario_marcado_repository import HorarioMarcadoRepository
from api.schemas.horario_marcado_schema import HorarioMarcadoCreate, HorarioMarcadoResponse

class HorarioMarcadoService:
    def __init__(self, repository: HorarioMarcadoRepository):
        self.repository = repository

    def create(self, data: HorarioMarcadoCreate) -> HorarioMarcadoResponse:
        horario_marcado = self.repository.create(data)
        return HorarioMarcadoResponse.model_validate(horario_marcado)
    
    def get_all(self) -> list[HorarioMarcadoResponse]:
        horarios_marcados = self.repository.get_all()
        return [HorarioMarcadoResponse.model_validate(horario_marcado) for horario_marcado in horarios_marcados]
    
    def update(self, horario_marcado: HorarioMarcadoResponse) -> HorarioMarcadoResponse:
        updated_horario_marcado = self.repository.update(horario_marcado.model_dump())
        return HorarioMarcadoResponse.model_validate(updated_horario_marcado)
    
    def delete(self, horario_marcado: HorarioMarcadoResponse) -> None:
        self.repository.delete(horario_marcado.model_dump())

    def get_by_prestador_e_data(self, prestador_id: int, data: str) -> list[HorarioMarcadoResponse]:
        horarios_marcados = self.repository.get_horarios_ocupados_by_prestador_e_data(prestador_id, data)
        return [HorarioMarcadoResponse.model_validate(horario_marcado) for horario_marcado in horarios_marcados]