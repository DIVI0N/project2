const { Router } = require('express');
const postgresql = Router();
const { PostgreSql } = require('../../models');

const { support } = require('../../support');
const { authToken } = support;

postgresql.get('/', authToken, (req, res) => {
  PostgreSql.getRequest(req, res);
});

postgresql.post('/', authToken, (req, res) => {
  PostgreSql.create(req, res);
});

postgresql.put('/', authToken, (req, res) => {
  PostgreSql.updateById(req, res);
});

postgresql.delete('/', authToken, (req, res) => {
  PostgreSql.delete(req, res);
});

module.exports = postgresql;

