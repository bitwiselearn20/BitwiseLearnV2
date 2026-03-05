FROM python:3.12-slim

WORKDIR /app

COPY shared /app/shared-pkg
RUN pip install --no-cache-dir /app/shared-pkg

COPY problem-service/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY problem-service/ .

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8004"]
