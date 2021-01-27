from fastapi.testclient import TestClient

from main import app
from .fixture_data import expected

client = TestClient(app)


def test_get_movies_with_startup():
    with TestClient(app) as client:
        response = client.get("/movies")
        assert response.status_code == 200


def test_get_movies():
    response = client.get("/movies")
    assert response.status_code == 200
