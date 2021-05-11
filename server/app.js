const express = require('express');
const { database, auth } = require('./routes');
const { PORT, support } = require('./support');
const { Mongo, PostgreSql } = require('./models');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
});

app.use('/auth', auth);
app.use('/database', database);
//проверить подключение  PostgreSql
const connectDB = () => {
  try {
    PostgreSql.connect();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};
connectDB();

const models = [Mongo];
support.dbConnected(app, PORT, models);
