import requests
import logging

from config import URL

logger = logging.getLogger()


def get_data(source):
    try:
        return requests.get(f"{URL}/{source}").json()
    except Exception as e:
        logger.error(f"An error occured while fetching, {e}")
