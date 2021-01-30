FROM python:3.9

RUN pip install poetry

COPY . /app

WORKDIR /app
RUN poetry config virtualenvs.create false
RUN poetry install

EXPOSE 5000

CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "5000"]

