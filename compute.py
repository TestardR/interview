from urllib.parse import urlparse
from cachetools import cached, TTLCache
import requests
import time
import logging

from config import URL, DEFAULT_CACHE_SIZE, DEFAULT_CACHE_TIME

logger = logging.getLogger()

# generic functions that gets data, handle exceptions, return json or None
@cached(cache=TTLCache(maxsize=DEFAULT_CACHE_SIZE, ttl=DEFAULT_CACHE_TIME))
def compute_data(films=requests.get(f"{URL}/films/").json(), people=requests.get(f"{URL}/people/").json()):
    """ Aggregates two sources of data to produce
    expected data structure """
    logger.info("Data computation starts")
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

    logger.info("Data computation done")
    return data_map
