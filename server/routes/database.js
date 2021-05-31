const Router = require('express');
<<<<<<< HEAD
const {
  postgresql, sqlite,
  mongo, redis, cassandra, mysql, neo4j
} = require('./database/');
=======
const { cassandra, h2, graphDb, mongo, mysql, postgresql, redis } = require('./database/');
>>>>>>> 6e0ced22beb5f68dc22d0da7b5090bb3cddfdae9

const database = Router();

database.use('/mysql', mysql);
database.use('/postgresql', postgresql);
<<<<<<< HEAD
database.use('/sqlite', sqlite);
database.use('/mongodb', mongo);
database.use('/redis', redis);
database.use('/cassandra', cassandra);
database.use('/neo', neo4j);
module.exports = database;
=======
database.use('/h2', h2);
database.use('/mongodb', mongo);
database.use('/redis', redis);
database.use('/cassandra', cassandra);
database.use('/graphdb', graphDb);

module.exports = database
>>>>>>> 6e0ced22beb5f68dc22d0da7b5090bb3cddfdae9
