import json
import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import requests

from config import URL, LOG_LEVEL, DEFAULT_CLIENT
from .cache import cache
from .job import compute_external_api_continuously

app = FastAPI()


""" Warning: The following settings will have to be reviewed to launch to production """
origins = [
    os.getenv("CLIENT", DEFAULT_CLIENT)
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
