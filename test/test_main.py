from fastapi.testclient import TestClient

from main import app
from .fixture_data import expected
from .fixtures import api_client


def test_ping(api_client):
    response = api_client.get("/ping")
    assert response.status_code == 200
    assert response.json() == {"ping": "pong!"}


def test_get_movies_with_startup(api_client):
    with api_client as client:
        response = client.get("/movies")
        assert response.status_code == 200


def test_get_movies(api_client):
    response = api_client.get("/movies")
    assert response.status_code == 200
