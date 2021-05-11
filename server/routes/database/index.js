const cassandra = require('./cassandra');
const graphDb = require('./graphDB');
const h2 = require('./h2');
const mongo = require('./mongoDB');
const mysql = require('./mySQL');
const postgresql = require('./postgreSQL');
const redis = require('./redis');

module.exports = {
  postgresql,
};
