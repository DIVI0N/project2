const Router = require('express');
const {
  postgresql, graphDb, sqlite,
  mongo, redis, cassandra, mysql,
} = require('./database/');

const database = Router();

const { support, settingFields } = require('../support');
const { authToken } = support;

database.use('/mysql', authToken, settingFields, mysql);
database.use('/postgresql', authToken, settingFields, postgresql);
database.use('/sqlite', authToken, settingFields, sqlite);
database.use('/mongodb', authToken, settingFields, mongo);
database.use('/redis', authToken, settingFields, redis);
database.use('/cassandra', authToken, settingFields, cassandra);
database.use('/graphdb', authToken, settingFields, graphDb);

module.exports = database;