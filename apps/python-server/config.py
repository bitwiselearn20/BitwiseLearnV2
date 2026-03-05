from pydantic_settings import BaseSettings
from functools import lru_cache


class Settings(BaseSettings):
    DATABASE_URL: str = "mongodb://localhost:27017/bitwiselearn"
    JWT_ACCESS_SECRET: str = "access-secret-change-me"
    JWT_REFRESH_SECRET: str = "refresh-secret-change-me"
    RESET_TOKEN_SECRET: str = "reset-token-secret-change-me"
    FRONTEND_URL: str = "http://localhost:3000"

    AWS_ACCESS_KEY_ID: str = ""
    AWS_SECRET_ACCESS_KEY: str = ""
    AWS_S3_REGION: str = "ap-south-1"
    AWS_S3_BUCKET: str = "bitwise-learn"

    CLOUDINARY_CLOUD_NAME: str = ""
    CLOUDINARY_API_KEY: str = ""
    CLOUDINARY_API_SECRET: str = ""

    EMAIL_USER: str = ""
    EMAIL_PASS: str = ""

    MQ_CLIENT: str = "amqp://guest:guest@localhost/"
    CODE_EXECUTION_SERVER: str = "https://emkc.org/"

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"


@lru_cache()
def get_settings() -> Settings:
    return Settings()
