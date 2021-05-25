// const Cassandra = require('./Cassandra');
// const GraphDb = require('./GraphDb');
// const H2 = require('./H2');
const { Mongo, PersonSchema } = require('./Mongo');
// const MySql = require('./MySql');
const PostgreSql = require('./PostgreSql');
const Redis = require('./Redis');

module.exports = {
  // Cassandra,
  // GraphDb,
  // H2,
  Mongo,
  // MySql,
  PostgreSql,
  Redis,
  PersonSchema
};


