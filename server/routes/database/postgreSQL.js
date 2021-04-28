const { Router } = require('express');
const postgresql = Router();
const pg = require("pg");

const config = {
  host: "localhost",
  user: "postgres",
  password: "FaJ_761FA",
  database: "postgresql_persons",
  port: 5432,
  ssl: false,
};

const client = new pg.Client(config);

async function databaseRequest(response) {
  client.connect();
  var res = await client.query("SELECT * FROM persons");
  client.end();
  response.json({ res });
}

postgresql.get('/', (req, res, next) => {
console.log("Request received...");
  databaseRequest(res);
});

postgresql.post('/', (req, res, next) => {

});

postgresql.put('/', (req, res, next) => {

});

postgresql.delete('/', (req, res, next) => {

});

module.exports = postgresql;