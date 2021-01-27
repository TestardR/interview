import logging
from fastapi import FastAPI
import uvicorn
import requests
import json

from cache import cache
from config import URL
from job import compute_data_continuously
from compute import compute_data


logger = logging.getLogger()

app = FastAPI()


@app.on_event("startup")
def setup():
    """ Slows down server startup, but decreases time to serve API calls as computed_data is cached """
    compute_data_continuously()
    """ compute_data() """



@app.get("/ping")
async def pong():
    return {"ping": "pong!"}


@app.get("/movies")
def get_movies():
    if cache.exists("movies"):
        data = cache.get("movies")
        return json.loads(data)
    else:
        return {"loading": True}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=5000)
