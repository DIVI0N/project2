const cassandra = require('./cassandra');
const graphDb = require('./graphDB');
const mongo = require('./mongoDB');
const mysql = require('./mySQL');
const postgresql = require('./postgreSQL');
const redis = require('./redis');
const sqlite = require('./sqlite');
module.exports = {
  postgresql, cassandra, graphDb, sqlite,
  mongo, mysql, redis
};
