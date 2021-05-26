const Router = require('express');
const {
  postgresql, graphDb, sqlite,
  mongo, redis, cassandra, mysql,
} = require('./database/');

const database = Router();

database.use('/mysql', mysql);
database.use('/postgresql', postgresql);
database.use('/sqlite', sqlite);
database.use('/mongodb', mongo);
database.use('/redis', redis);
database.use('/cassandra', cassandra);
database.use('/graphdb', graphDb);

module.exports = database;