#!/bin/bash

docker-compose exec app bash -c "cd /test; pytest"
