from urllib.parse import urlparse

from cachetools import cached, TTLCache
import requests


from config import URL, DEFAULT_SIZE


@cached(cache=TTLCache(maxsize=DEFAULT_SIZE, ttl=60))
def compute_data(films=requests.get(f"{URL}/films/").json(), people=requests.get(f"{URL}/people/").json()):
    """ Aggregates two sources of data to produce
    expected data structure """
    data_map = {}  # Note: I could have used a defaultdict

    for film in films:
        data_map[film["id"]] = {"title": film["title"], "persons": []}

    for pers in people:
        for film in pers["films"]:
            film_id = film.rsplit('/', 1)[-1]
            if film_id in data_map:
                pers_id = pers["id"]
                r = requests.get(f"{URL}/people/{pers_id}").json()
                person = {"id": r["id"], "name": r["name"]}
                data_map[film_id]["persons"].append(person)

    return data_map


if __name__ == "__main__":
    compute_data()
