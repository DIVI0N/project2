const { Router } = require('express');
<<<<<<< HEAD
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

=======
const postgresql = Router()

postgresql.get('/', (req, res, next) => {

});

postgresql.post('/', (req, res, next) => {

});

postgresql.put('/', (req, res, next) => {

});

postgresql.delete('/', (req, res, next) => {

});

module.exports = postgresql
>>>>>>> 6e0ced22beb5f68dc22d0da7b5090bb3cddfdae9
