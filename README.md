### Building Blocks

1. Compute service
2. API Service
3. Cache Service

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

main.py implements a basic fastAPI server (very lightweight framework), on port 8000. It features a GET route to "/movies". This route serves the content produced by our compute service.

#### Cache service

To limit time-intensive operations with our compute service and to not call it on every page load, we implmented cache using cachetools.

Thus, we cache the result produced by our compute service for 60 secondes. After that period of time, cache is bust and heavy computation starts over.
