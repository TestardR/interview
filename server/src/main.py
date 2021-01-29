import logging
import json
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import requests

from config import URL
from .cache import cache
from .job import compute_external_api_continuously


logger = logging.getLogger()

app = FastAPI()


""" Warning: The following settings will have to changed to launch for production """
origins = [
    "http://localhost:8000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["*"],
)


@app.on_event("startup")
def setup():
    """ Starts background task calling our Compute External API svc every minute """
    compute_external_api_continuously()


@app.get("/movies")
def get_movies():
    if cache.exists("movies"):
        data = cache.get("movies")
        return json.loads(data)
    else:
        return {"loading": True}


if __name__ == "__main__":
    uvicorn.run(app)
