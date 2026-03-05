from pydantic_settings import BaseSettings
from functools import lru_cache


class Settings(BaseSettings):
    DATABASE_URL: str = "mongodb://localhost:27017/bitwiselearn"
    MQ_CLIENT: str = "amqp://guest:guest@localhost/"

    AWS_ACCESS_KEY_ID: str = ""
    AWS_SECRET_ACCESS_KEY: str = ""
    AWS_S3_REGION: str = "ap-south-1"
    AWS_S3_BUCKET: str = "bitwise-learn"

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"


@lru_cache()
def get_settings() -> Settings:
    return Settings()
