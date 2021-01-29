import logging
import os

from config import LOG_LEVEL

logger = logging.getLogger()
logging.basicConfig(level=os.getenv("LOG_LEVEL", LOG_LEVEL))
