from datetime import datetime
from api.schemas.prestador_schema import PrestadorResponse
from pydantic import BaseModel, field_validator

class HorarioMarcadoCreate(BaseModel):
    prestador_id: int
    cliente_nome: str
    cliente_email: str
    cliente_telefone: str
    data_hora: str

class HorarioMarcadoResponse(BaseModel):
    id: int
    prestador_id: int
    cliente_nome: str
    cliente_email: str
    cliente_telefone: str
    data_hora: str
    prestador: PrestadorResponse

    @field_validator('data_hora', mode='before')
    @classmethod
    def converter_data_hora(cls, v):
        if isinstance(v, datetime):
            return v.strftime('%Y-%m-%d %H:%M')
        return v

    class Config:
        from_attributes = True