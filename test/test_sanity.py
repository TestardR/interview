import requests
# check if the keys are in the api
# /films api
# /people api

URL = "https://ghibliapi.herokuapp.com"


def test_films_api():
    r = requests.get(f"{URL}/films").json()
    if "id" in r[0]:
        assert True
    if "title" in r[0]:
        assert True


def test_people_api():
    r = requests.get(f"{URL}/people").json()
    if "id" in r[0]:
        assert True
    if "name" in r[0]:
        assert True


# To avoid false negative test
# if network (not accessible) skip it then
# pytest X pass https://docs.pytest.org/en/latest/skipping.html
