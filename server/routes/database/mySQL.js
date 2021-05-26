const { Router } = require('express');
const mysql = Router();
const { MySql } = require('../../models');

const { support } = require('../../support');
const { authToken } = support;

mysql.get('/', authToken, (req, res) => {
  MySql.getRequest(req, res);
});

mysql.post('/', authToken, (req, res) => {
  MySql.create(req, res);
});

mysql.put('/', authToken, (req, res) => {
  MySql.updateById(req, res);
});

mysql.delete('/', authToken, (req, res) => {
  MySql.delete(req, res);
});

module.exports = mysql;