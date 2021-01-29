import threading
import time
import schedule

from config import DEFAULT_CACHE_TIME
from .compute_ext_api import compute_external_api
from .log_config import logging

""" Background task calling Compute External API service every X time """


def compute_external_api_continuously(interval=1):
    """Continuously run, while executing pending jobs at each
    elapsed time interval.
    @return cease_continuous_run: threading. Event which can
    be set to cease continuous run. Please note that it is
    *intended behavior that run_continuously() does not run
    missed jobs*. 
    """
    cease_continuous_run = threading.Event()

    class ScheduleThread(threading.Thread):
        @classmethod
        def run(cls):
            while not cease_continuous_run.is_set():
                schedule.run_pending()
                time.sleep(interval)

    continuous_thread = ScheduleThread()
    continuous_thread.start()

    logging.info("Background task started")

    return cease_continuous_run


schedule.every(DEFAULT_CACHE_TIME).seconds.do(compute_external_api)
