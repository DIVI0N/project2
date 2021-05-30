const { Router } = require('express');
const redis = Router();
const { Redis } = require('../../models');
const { support, settingFields } = require('../../support');
const { authToken } = support;

redis.get('/', authToken, (req, res, next) => {
  Redis.getRequest(req, res);
});

redis.post('/', authToken, settingFields, (req, res, next) => {
  Redis.create(req, res);
});

redis.put('/', authToken, settingFields, (req, res, next) => {
  Redis.update(req, res);
});

redis.delete('/', authToken, (req, res, next) => {
  Redis.delete(req, res);
});

module.exports = redis;