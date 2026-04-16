from api.database import Base
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship

class HorarioMarcado(Base):
    __tablename__ = "horario_marcado"

    id = Column(Integer, primary_key=True, index=True)
    prestador_id = Column(Integer, ForeignKey("prestador.id"), nullable=False)
    cliente_nome = Column(String, nullable=False)
    cliente_email = Column(String, nullable=False)
    cliente_telefone = Column(String, nullable=False)
    data_hora = Column(DateTime, nullable=False)