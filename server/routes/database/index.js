const cassandra = require('./cassandra');
const mongo = require('./mongoDB');
const mysql = require('./mySQL');
const postgresql = require('./postgreSQL');
const redis = require('./redis');
const sqlite = require('./sqlite');
const neo4j = require('./neo4j');
module.exports = {
  postgresql, cassandra, sqlite,
  mongo, mysql, redis, neo4j
};
