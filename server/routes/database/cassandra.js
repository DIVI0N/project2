const { Router } = require('express');
const { Cassandra } = require('../../models/databases');
const cassandra = Router();
const { support } = require('../../support');

const { authToken } = support;
const person = new Cassandra();

cassandra.get('/', authToken, (req, res) => {
  person.getRequest(req, res);
});

cassandra.post('/', authToken, (req, res) => {
  person.create(req, res);
});

cassandra.put('/', authToken, (req, res) => {
  person.updateById(req, res);
});

cassandra.delete('/', authToken, (req, res) => {
  person.delete(req, res);
});

module.exports = cassandra;