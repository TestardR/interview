import redis

""" Init cache storage """

cache = redis.Redis(host='redis', port=6379)
