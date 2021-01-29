#!/bin/bash

docker-compose exec server bash -c "cd /test; pytest"
