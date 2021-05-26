const { Router } = require('express');
const mongo = Router();
const { Mongo } = require('../../models');
const { support, settingFields } = require('../../support');

const { authToken } = support;
const person = new Mongo();

mongo.get('/', authToken, (req, res) => {

  person.getPerson(req, res);
});

mongo.post('/', authToken, settingFields, (req, res) => {
  person.setPerson(req, res);
});

mongo.put('/', authToken, settingFields, (req, res) => {
  person.updatePerson(req, res);
});

mongo.delete('/', authToken, (req, res) => {
  person.deletePerson(req, res);
});

module.exports = mongo;