import requests

from config import URL
from .log_config import logger


def get_data(source):
    try:
        return requests.get(f"{URL}/{source}").json()
    except Exception as e:
        logger.error(f"An error occured while fetching, {e}")
