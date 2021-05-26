const { Router } = require('express');
const postgresql = Router();
const { PostgreSql } = require('../../models');

const { support, settingFields } = require('../../support');
const { authToken } = support;

postgresql.get('/', authToken, (req, res) => {
  PostgreSql.getRequest(req, res);
});

postgresql.post('/', authToken, settingFields, (req, res) => {
  PostgreSql.create(req, res);
});

postgresql.put('/', authToken, settingFields, (req, res) => {
  PostgreSql.updateById(req, res);
});

postgresql.delete('/', authToken, settingFields, (req, res) => {
  PostgreSql.delete(req, res);
});

module.exports = postgresql;

