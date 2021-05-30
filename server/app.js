const express = require('express');
const { database, auth } = require('./routes');
const { PORT, support } = require('./support');
const { Mongo, Cassandra, PostgreSql, Redis, MySql } = require('./models');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
});

app.use('/api/auth', auth);
app.use('/api/database', database);

const models = [Mongo, PostgreSql, MySql,
  // Redis,
  new Cassandra()
];
support.dbConnected(app, PORT, models);
