const Router = require('express');
const {
  postgresql, sqlite,
  mongo, redis, cassandra, mysql, neo4j
} = require('./database/');

const database = Router();

database.use('/mysql', mysql);
database.use('/postgresql', postgresql);
database.use('/sqlite', sqlite);
database.use('/mongodb', mongo);
database.use('/redis', redis);
database.use('/cassandra', cassandra);
database.use('/neo', neo4j);
module.exports = database;