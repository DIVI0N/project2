const Router = require('express');
const {
  postgresql, cassandra, graphDb, h2,
  mongo, mysql, redis, sqlite
} = require('./database/');

const database = Router();

database.use('/mysql', mysql);
database.use('/postgresql', postgresql);
database.use('/h2', h2);
database.use('/mongodb', mongo);
database.use('/redis', redis);
database.use('/cassandra', cassandra);
database.use('/graphdb', graphDb);
// database.use('/sqlite', sqlite);

module.exports = database;