### Building Blocks

1. Compute svc
2. API svc
3. Cache svc
4. Job svc
6. Client svc

**Notes: Written code has to been done using TDD**

#### Compute service

1. Intensive calculation

compute.py makes the heavy lifting. Its goal is to make intensive calculation based on the Ghibli's API. It builds the necessary data structure, which will be requested by the API service.

Expected data structure:

```
{"film_id": {
    "film_title: "zzz"
    "persons": [{"person_id": "xxx", "person_name": "xxx"}],
    }
}
```

2. Testing

fixture_data.py features necessary data for test_compute.py to run. It is a copy of the available data on Ghibli's API.

test_compute.py tests compute_data function from compute.py.

test_sanity.py tests access to data and that data conformity to what is expected from Gbibli's API.

#### API service

main.py implements a basic fastAPI server (very lightweight framework), on port 5000. It features a GET route to "/movies". This route serves the content produced by our compute service.

On the server, we will call our job service (a thread calling the compute service in the background) as soon as the server starts up. 

#### Cache service

To limit time-intensive operations with our compute service and to not call it on every page load, we implmented cache using Redis.

As we use mutlithreading to run our compute service in the background, we opted for Redis. It is a single source of truth for all threads. Furthermore, Redis is atomic on write assuring us of data consistency (to be further investigated). 

#### Job service

We implemented the compute sercice so as it can be run as a background task. The background task is run by a thread every minute, while caching the result. Thus the user never hits the compute service itself. The user only access our cache service.

