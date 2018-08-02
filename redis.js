const redis = require('redis');

const client = redis.createClient({
  host: process.env.REDIS_HOST
});

client.on('error', err => {
  console.error('REDIS ERR:', err);
});

module.exports = client;
