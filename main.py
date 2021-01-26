import logging
from fastapi import FastAPI
import uvicorn
import requests

from compute import compute_data

logger = logging.getLogger()

app = FastAPI()


@app.on_event("startup")
async def setup():
    """ Slows down server startup, but decreases time to serve API calls as computed_data is cached """
    compute_data()


@app.get("/")
async def index():
    return "Ghibli's API"


@app.get("/movies")
async def get_movies():
    return compute_data()


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
