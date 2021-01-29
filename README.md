# I. Building Blocks

1. Architecture
2. Compute svc
3. Cache svc
4. Job svc
5. API svc
6. Client svc
7. Testing Policies

# II. What if I had more time ?

1. Logging Format
2. Scaling with MQ
3. Improve Type safety
4. Testing

**Notes: Written code has to been done using TDD**

# I. Building Blocks

## 1. Architecture schema

# Event-Driven Architecture

Below, you can observe the architecture schema which drove the design of this application. The main idea behind this schema is to observe the interactions between the main blocks. These interactions are below explained.

![architecture schema version 1](https://github.com/TestardR/intrvw_s/blob/master/architecture-v1.png)

## 2. Compute service

The Compute svc handle time-intensive calculations (compute_ext_api.py). It makes the heavy lifting computing data requested to Ghibli's API. It builds the necessary data structure, which will be stored in the cache svc.

Expected data structure:

```
{"film_id": {
    "film_title: "foo"
    "persons": [{"person_id": "bar", "person_name": "foo-bar"}],
    }
}
```

## 3. Cache service

As soon as the compute svc is done computing data, the data is stored in our cache svc. As I use mutlithreading to run our compute service in the background, I opted for Redis. It is a single source of truth for all threads. 

Redis is an in-memory data store (key–value database) and battle tested. It benefits from a very efficient access to data with O(1) on reads. Furthermore, Redis is atomic on writes assuring data consistency.

## 4. Job service

I have used threads to run the compute svc in the background. The background task is run every minute and updates the cache with the result. Thus, the client never hits the compute svc itself. The client only access our cache svc.

## 5. API service

Our API is based a FastAPI server, on port 5000. FastAPI is micro-framework, light and efficient for the current task. It features a GET route to "/movies". This route serves content **stored in the cache**, which has been produced by our compute svc.

When the server boots up, the server calls our job svc starting our background task.

## 6. Client service

The client is a web interface, available on port 8000. It is a React/TypeScript application making use of Material-UI components for faster development.

## 7. Testing Policies

### Server side

Testing has been done using pytest. Tests are located in one folder mimicking ./src architecture. Both unit tests and functional tests are in the test folder. It could be an improvement to separate them.

Notes:

- fixtures.py features shared fixture for testing.
- fixture_data.py features necessary data for test_compute.py to run. It is a copy of the available data on Ghibli's API.
- test_sanity.py tests access to data and that data conformity to what is expected from Gbibli's API.

### Client side

Testing has been done using Jest and Enzyme. Tests are located with its belonging component with the following convention:

- Component.tsx
- Component.spec.tsx

# II. What if I had more time ?

## 1. Logging Format

I think that logging format should standardized among micro-services or applications. Currently, I think that format used in this application is not user friendly (itt could be machine friendly though). From I have read, formatting Gunicorn/Uvicorn/FastAPI is a topic in itself: https://pawamoy.github.io/posts/unify-logging-for-a-gunicorn-uvicorn-app/ .

## 2. Scaling with MQ

If the data requested from the external API were more consequent, the compute svc would take much more time to process. As such, I could consider running several threads computing data concurrently. They would publish the results to a event-bus, such as Kafka, RabbitMQ, or else. The subscribing svc would then wait for the data to be ready to store it in the cache svc.

![architecture schema version 2](https://github.com/TestardR/intrvw_s/blob/master/architecture-v2.png)

## 3. Testing Policies

Server side, I would separate unit tests from functional tests. It is better practice and unit tests should be runnable outside the docker architecture.

