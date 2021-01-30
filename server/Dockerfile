FROM python:3.9

RUN pip install poetry

COPY ./src /app/src
COPY config.py /app
COPY poetry.lock /app
COPY pyproject.toml /app

WORKDIR /app
RUN poetry config virtualenvs.create false
RUN poetry install

EXPOSE 5000

