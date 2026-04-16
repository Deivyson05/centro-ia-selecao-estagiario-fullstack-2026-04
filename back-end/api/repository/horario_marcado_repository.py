from sqlalchemy.orm import Session
from api.models.horario_marcado import HorarioMarcado
from api.schemas.horario_marcado_schema import HorarioMarcadoCreate

class HorarioMarcadoRepository:
    def __init__(self, db: Session):
        self.db = db

    def create(self, data: HorarioMarcadoCreate) -> HorarioMarcado:
        horario_marcado = HorarioMarcado(**data.model_dump())
        self.db.add(horario_marcado)
        self.db.commit()
        self.db.refresh(horario_marcado)
        return horario_marcado


    def get_all(self) -> list[HorarioMarcado]:
        return self.db.query(HorarioMarcado).all()
    
    def update(self, horario_marcado: HorarioMarcado) -> HorarioMarcado:
        self.db.add(horario_marcado)
        self.db.commit()
        self.db.refresh(horario_marcado)
        return horario_marcado
    
    def delete(self, horario_marcado: HorarioMarcado) -> None:
        self.db.delete(horario_marcado)
        self.db.commit()