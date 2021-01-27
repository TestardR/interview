import logging
from fastapi import FastAPI
import uvicorn
import requests

from compute import compute_data
from utils import get_data
from config import URL
logger = logging.getLogger()

app = FastAPI()

@app.on_event("startup")
def setup():
    """ Slows down server startup, but decreases time to serve API calls as computed_data is cached """
    compute_data('films', 'people')


@app.get("/")
def index():
    return "Ghibli's API"


@app.get("/movies")
def get_movies():
    return compute_data('films', 'people')


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=5000)
