FROM python:3.9
# This is to print directly to stdout instead of buffering output
ENV PYTHONUNBUFFERED 1
# Prevents Python from writing pyc files to disc
ENV PYTHONDONTWRITEBYTECODE 1

RUN pip install poetry

COPY ./src /app/src
COPY ./test /app/test
COPY pyproject.toml /app
COPY poetry.lock /app

WORKDIR /app
RUN poetry config virtualenvs.create false
RUN poetry install



