from sqlalchemy.orm import Session
from api.models.prestador import Prestador
from api.schemas.prestador_schema import PrestadorCreate

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
    
    def get_all(self) -> list[Prestador]:
        return self.db.query(Prestador).all()
    
    def delete(self, prestador_id: int) -> None:
        prestador = self.get_by_id(prestador_id)
        if prestador:
            self.db.delete(prestador)
            self.db.commit()

    def update(self, prestador_id: int, data: PrestadorCreate) -> Prestador | None:
        prestador = self.get_by_id(prestador_id)
        if prestador:
            for key, value in data.model_dump().items():
                setattr(prestador, key, value)
            self.db.commit()
            self.db.refresh(prestador)
            return prestador
        return None
    
    def get_prestadores_by_servico(self, servico: str) -> list[Prestador]:
        print("Serviço:", servico)
        return self.db.query(Prestador).filter(Prestador.servico == servico).all()
    
    def get_servicos_disponiveis(self) -> list[str]:
        return [servico for (servico,) in self.db.query(Prestador.servico).distinct().all()]