const { Router } = require('express');
const mongo = Router();
const { Mongo } = require('../../models');
const { support } = require('../../support');

const { authToken } = support;

mongo.get('/', authToken, (req, res) => {
  const mongo = new Mongo();
  mongo.getPerson(req, res);
});

mongo.post('/', authToken, (req, res) => {
  const mongo = new Mongo();
  mongo.setPerson(req, res);
});

mongo.put('/', authToken, (req, res) => {
  const mongo = new Mongo();
  mongo.updatePerson(req, res);
});

mongo.delete('/', authToken, (req, res) => {
  const mongo = new Mongo();
  mongo.deletePerson(req, res);
});

module.exports = mongo;