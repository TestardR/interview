import redis

cache = redis.Redis(host='redis', port=6379) # asyncio redis
