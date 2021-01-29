import logging
import os

from config import LOG_LEVEL

logger = logging.getLogger(__name__)
logging.basicConfig(level=os.getenv('LOG_LEVEL', LOG_LEVEL))
