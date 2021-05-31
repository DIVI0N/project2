const { Router } = require('express');
const mysql = Router();
<<<<<<< HEAD
const { MySql } = require('../../models');

const { support, settingFields } = require('../../support');
const { authToken } = support;

mysql.get('/', authToken, (req, res) => {
  MySql.getRequest(req, res);
});

mysql.post('/', authToken, settingFields, (req, res) => {
  MySql.create(req, res);
});

mysql.put('/', authToken, settingFields, (req, res) => {
  MySql.updateById(req, res);
});

mysql.delete('/', authToken, (req, res) => {
  MySql.delete(req, res);
});

module.exports = mysql;
=======

mysql.get('/', (req, res, next) => {

});

mysql.post('/', (req, res, next) => {

});

mysql.put('/', (req, res, next) => {

});

mysql.delete('/', (req, res, next) => {

});

module.exports = mysql
>>>>>>> 6e0ced22beb5f68dc22d0da7b5090bb3cddfdae9
