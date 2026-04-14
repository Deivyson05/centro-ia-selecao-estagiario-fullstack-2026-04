from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    llm_api_key: str
    database_url: str
    debug: bool = False  # valor padrão

    class Config:
        env_file = ".env"

settings = Settings()