const { Router } = require('express');
const sqlite = Router();
const { SQLite } = require('../../models');

const { support } = require('../../support');
const { authToken } = support;

sqlite.get('/', authToken, (req, res, next) => {
  SQLite.getRequest(req, res);
});

sqlite.post('/', authToken, (req, res, next) => {
  SQLite.create(req, res);
});

sqlite.put('/', authToken, (req, res, next) => {
  SQLite.updateById(req, res);
});

sqlite.delete('/', authToken, (req, res, next) => {
  SQLite.delete(req, res);
});

module.exports = sqlite;