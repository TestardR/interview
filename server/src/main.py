import logging
import json
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import requests


from .cache import cache
from .config import URL
from .job import compute_external_api_continuously


logger = logging.getLogger()

app = FastAPI()

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
    """ Slows down server startup, but decreases time to serve API calls as computed_data is cached """
    compute_external_api_continuously()


@app.get("/movies")
def get_movies():
    if cache.exists("movies"):
        data = cache.get("movies")
        return json.loads(data)
    else:
        return {"loading": True}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=5000)
