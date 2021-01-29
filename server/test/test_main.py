import json

from fastapi.testclient import TestClient

from .fixtures import api_client

def test_get_movies(api_client):
    """ This test should be run from a fresh start up, otherwise will fail as data will be cached """
    response = api_client.get("/movies")
    assert '2baf70d1-42bb-4437-b551-e5fed5a87abe' in response.json()
    assert '5fdfb320-2a02-49a7-94ff-5ca418cae602' in response.json()
    assert response.status_code == 200
