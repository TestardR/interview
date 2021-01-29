import redis

""" Init cache using Redis """

cache = redis.Redis(host='redis', port=6379)
