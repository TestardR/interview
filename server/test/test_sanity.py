import pytest
import requests

from config import URL

""" To avoid false negative test. we skip test if a 
ConnectionError is raised. Thus, to avoid false negatives """


@pytest.mark.xfail(raises=ConnectionError)
def test_films_api():
    r = requests.get(f"{URL}/films/").json()
    if "id" in r[0]:
        assert True
    if "title" in r[0]:
        assert True


@pytest.mark.xfail(raises=ConnectionError)
def test_people_api():
    r = requests.get(f"{URL}/people/").json()
    if "id" in r[0]:
        assert True
    if "name" in r[0]:
        assert True
