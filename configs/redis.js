const { createClient } = require('redis');

// Socket required for node redis <-> docker-compose connection

//const Redis = createClient({ socket: { host: 'redis', port: 6379 } });

const Redis = createClient({ socket: { url: process.env.REDIS_URL} });

module.exports = Redis;
