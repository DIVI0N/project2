<<<<<<< HEAD
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
=======
const cassandra = require("./cassandra");
const graphDb = require("./graphDB");
const h2 = require("./h2");
const mongo = require("./mongoDB");
const mysql = require("./mySQL");
const postgresql = require("./postgreSQL");
const redis = require("./redis");

module.exports = {
  cassandra,
  h2,
  graphDb,
  mongo,
  mysql,
  postgresql,
  redis
>>>>>>> 6e0ced22beb5f68dc22d0da7b5090bb3cddfdae9
};
