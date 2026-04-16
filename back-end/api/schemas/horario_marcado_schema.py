from pydantic import BaseModel

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

    class Config:
        from_attributes = True