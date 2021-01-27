import requests
import logging

from config import URL

logger = logging.getLogger()


def get_data(source):
    try:
        r = requests.get(f"{URL}/{source}").json()
        return r
    except Exception as e:
        logger.warning(f'An error occured while fetching, {e}')
