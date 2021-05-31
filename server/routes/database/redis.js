const { Router } = require('express');
<<<<<<< HEAD
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
=======
const redis = Router()

redis.get('/', (req, res, next) => {

});

redis.post('/', (req, res, next) => {

});

redis.put('/', (req, res, next) => {

});

redis.delete('/', (req, res, next) => {

});

module.exports = redis
>>>>>>> 6e0ced22beb5f68dc22d0da7b5090bb3cddfdae9
