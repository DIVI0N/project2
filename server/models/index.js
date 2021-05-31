<<<<<<< HEAD
const User = require('./User/User');
const UserSchema = require('./User/UserSchema');
const { Cassandra, Mongo, MySql, PostgreSql, PersonSchema, Redis, Sqlite, NEO4J } = require('./databases');

module.exports = {
  User,
  UserSchema,
  Cassandra,
  Sqlite,
  Mongo,
  MySql,
  PostgreSql,
  Redis,
  NEO4J
};
=======
const User = require("./User");
const { Cassandra, GraphDb, H2, Mongo, MySql, PostgreSql } = require('./databases');

module.exports = {
  User,
  Cassandra,
  GraphDb,
  H2,
  Mongo,
  MySql,
  PostgreSql
};
>>>>>>> 6e0ced22beb5f68dc22d0da7b5090bb3cddfdae9
