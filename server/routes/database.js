const Router = require('express');
const { postgresql } = require('./database/');

const database = Router();

database.use('/postgresql', postgresql);

module.exports = database;

