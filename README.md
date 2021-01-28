### Building Blocks

1. Compute svc
2. API svc
3. Cache svc
4. Job svc
5. Client svc

**Notes: Written code has to been done using TDD**

#### Architecture schema

##### Version 1

![architecture schema version 1](https://github.com/TestardR/intrvw_s/blob/master/architecture-v1.png)

##### Version 2: If I had the time to do it.

![architecture schema version 2](https://github.com/TestardR/intrvw_s/blob/master/architecture-v2.png)

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

#### API service

main.py implements a basic fastAPI server (very lightweight framework), on port 5000. It features a GET route to "/movies". This route serves content produced by our compute service **from the cache** (important point in the architecture). 

When the server boots up, the server calls our job service (a thread calling the compute service in the background) which will cache the data.

#### Cache service

To limit time-intensive operations with our compute service and to not call it on every page load, I implemented cache using Redis.

As I use mutlithreading to run our compute service in the background, I opted for Redis. It is a single source of truth for all threads. Redis is an in-memory data structure store (key–value database). As such, it benefits from a very efficient access to data with O(1) on reads. Furthermore, Redis is atomic on write assuring us of data consistency (to be further investigated).

#### Job service

I implemented the compute sercice so as it can be run as a background task. The background task is run by a thread every minute, while caching the result. Thus, the user never hits the compute service itself. The user only access our cache service.

#### Client service

#### Testing

##### Server side

Testing has been done using pytest. Tests are located in one folder mimicking ./src architecture. Both unit tests and functional tests are in the test folder. It could be an improvement to separate them. 

Notes:
- fixtures.py features shared fixture for testing.
- fixture_data.py features necessary data for test_compute.py to run. It is a copy of the available data on Ghibli's API.
- test_sanity.py tests access to data and that data conformity to what is expected from Gbibli's API.

##### Client side

Testing has been done using Jest and Enzyme. Tests are located with its belonging component with the following convention:

- Component.tsx
- Component.spec.tsx

