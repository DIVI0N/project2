// const { Router } = require('express');
// const mysql = Router();
// const { MySql } = require('../../models');

// const { support } = require('../../support');
// const { authToken } = support;

// mysql.get('/', authToken, (req, res, next) => {
//     console.log('da')
//     MySql.getRequest(req, res);
// });

// mysql.post('/', authToken, (req, res, next) => {
//     MySql.create(req, res);
// });

// mysql.put('/', authToken, (req, res, next) => {
//     MySql.updateById(req, res);
// });

// mysql.delete('/', authToken, (req, res, next) => {
//     MySql.delete(req, res);
// });

// // module.exports = mysql;