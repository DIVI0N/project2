const { Router } = require('express');
const neo4j = Router();
const { NEO4J } = require('../../models');

const { support, settingFields } = require('../../support');
const { authToken } = support;

const person = new NEO4J();
neo4j.get('/', authToken, (req, res, next) => {
  person.getPersons(req, res);
});

neo4j.post('/', authToken, (req, res, next) => {
  person.postPerson(req, res);
});

neo4j.put('/', authToken, (req, res, next) => {
  person.updatePerson(req, res);
});

neo4j.delete('/', authToken, (req, res, next) => {
  person.deletePerson(req, res);
});

module.exports = neo4j;