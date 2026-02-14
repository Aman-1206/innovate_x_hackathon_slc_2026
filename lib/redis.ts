import { createClient } from "redis";

const redisClient = createClient({
    url: process.env.REDIS_URL,
}).then(() => console.log('Redis connected successfully')).catch(error => {
    console.log('Redis connection failed:', error);
    process.exit(1);
});

export default redisClient;