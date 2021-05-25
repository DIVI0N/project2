const { Router } = require('express');
const redis = Router();
const { Redis } = require('../../models');
const { support } = require('../../support');
const { authToken } = support;

redis.get('/', (req, res, next) => {
  Redis.getRequest(req, res);
});

redis.post('/', (req, res, next) => {
  Redis.create(req, res);
});

redis.put('/', (req, res, next) => {
  Redis.create(req, res);
});

redis.delete('/:id', (req, res, next) => {
  Redis.delete(req, res);
});

module.exports = redis;