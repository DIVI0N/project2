<<<<<<< HEAD
const Cassandra = require('./Cassandra');
const { Mongo, PersonSchema } = require('./Mongo');
const MySql = require('./MySql');
const NEO4J = require('./Neo4j');
const PostgreSql = require('./PostgreSql');
const Redis = require('./Redis');
const Sqlite = require('./Sqlite/Sqlite');


module.exports = {
  Cassandra,
  Sqlite,
  Mongo,
  MySql,
  PostgreSql,
  Redis,
  PersonSchema,
  Cassandra,
  NEO4J
};


=======
const Cassandra = require("./Cassandra");
const GraphDb = require("./GraphDb");
const H2 = require("./H2");
const Mongo = require("./Mongo");
const MySql = require("./MySql");
const PostgreSql = require("./PostgreSql");

module.exports = {
  Cassandra,
  GraphDb,
  H2,
  Mongo,
  MySql,
  PostgreSql
}
>>>>>>> 6e0ced22beb5f68dc22d0da7b5090bb3cddfdae9
