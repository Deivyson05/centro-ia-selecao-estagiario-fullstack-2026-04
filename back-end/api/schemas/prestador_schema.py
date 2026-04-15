from pydantic import BaseModel

class PrestadorCreate(BaseModel):
    nome: str
    email: str
    telefone: str
    endereco: str

class PrestadorResponse(BaseModel):
    id: int
    nome: str
    email: str
    telefone: str
    endereco: str

    class Config:
        from_attributes = True