from api.database import Base
from sqlalchemy import Column, Integer, String

class Prestador(Base):
    __tablename__ = "prestador"

    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)
    telefone = Column(String, nullable=False)
    endereco = Column(String, nullable=False)