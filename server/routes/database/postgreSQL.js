const { Router } = require('express');
const postgresql = Router();
const { PostgreSql } = require('../../models');

const { support } = require('../../support');
const { authToken } = support;

postgresql.get('/', authToken, (req, res, next) => {
  console.log('Request received...');
  PostgreSql.getRequest(res);
});

postgresql.post('/', authToken, (req, res, next) => {
  PostgreSql.create(req, res);
});

postgresql.put('/', authToken, (req, res, next) => {
  PostgreSql.updateById(req, res);
});

postgresql.delete('/', authToken, (req, res, next) => {
  PostgreSql.delete(req, res);
});

// postgresql.delete('/person/clearAll', authToken, (req, res, next) => {
//   PostgreSql.clearAll(res);
// });


module.exports = postgresql;