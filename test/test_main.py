from fastapi.testclient import TestClient

from main import app
from .fixture_data import expected


client = TestClient(app)


def test_index():
    response = client.get("/movies")
    
    assert response.status_code == 200
    assert response.json() == expected


