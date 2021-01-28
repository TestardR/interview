from fastapi.testclient import TestClient

from main import app
from .fixture_data import expected
from .fixtures import api_client


def test_get_movies(api_client):
    response = api_client.get("/movies")
    assert response.json() == {"loading": True}
    assert response.status_code == 200
