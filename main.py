from fastapi import FastAPI
import uvicorn
import requests

from compute import compute_data

app = FastAPI()


@app.get("/movies")
def index():
    return compute_data()

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
