from urllib.parse import urlparse
import requests  # async requests
import time
import logging
import redis  # async redis
import json

from .config import URL, DEFAULT_CACHE_TIME
from .utils import get_data
from .cache import cache


logger = logging.getLogger()


def _compute(films, people):
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
                r = get_data(f"people/{pers_id}")
                person = {"id": r["id"], "name": r["name"]}
                data_map[film_id]["persons"].append(person)

    logger.info("Data computation done")
    cache.set("movies", json.dumps(data_map))


def compute_data(films="films", people="people"):
    films_data = get_data(films)
    people_data = get_data(people)

    if films_data and people_data:
        _compute(films_data, people_data)
        data = cache.get("movies") 
        return json.loads(data)
    else:
        return {}
