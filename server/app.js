const express = require('express');
const connect = require('./connected');
const { login, registration, database } = require('./routes');
const { PORT } = require('./support');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
});

app.use('/login', login);
app.use('/registration', registration);
app.use('/database', database);

connect(app, PORT);