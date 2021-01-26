### Building Blocks

**Notes: Written code has to been done using TDD**

### Compute service

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