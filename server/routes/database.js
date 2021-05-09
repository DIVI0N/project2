const Router = require('express');
const { cassandra, h2, graphDb, mongo, mysql, postgresql, redis } = require('./database/');

const database = Router();

database.use('/mysql', mysql);
database.use('/postgresql', postgresql);
database.use('/h2', h2);
database.use('/mongodb', mongo);
database.use('/redis', redis);
database.use('/cassandra', cassandra);
database.use('/graphdb', graphDb);

module.exports = database;
// let a = {
//   'firstName': 'alex',
//   'lastName': 'malik',
//   'age': '26',
//   'city': 'Kharkiv',
//   'phone': '1231231',
//   'email': 'asda@gmail.com',
//   'company': 'Best'
// };