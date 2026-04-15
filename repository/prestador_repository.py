from sqlalchemy.orm import Session
from models.prestador import Prestador
from schemas.prestador_schema import PrestadorCreate

class PrestadorRepository:
    def __init__(self, db: Session):
        self.db = db

    def create(self, data: PrestadorCreate) -> Prestador:
        prestador = Prestador(**data.model_dump())
        self.db.add(prestador)
        self.db.commit()
        self.db.refresh(prestador)
        return prestador
    
    def get_by_id(self, prestador_id: int) -> Prestador | None:
        return self.db.query(Prestador).filter(Prestador.id == prestador_id).first()