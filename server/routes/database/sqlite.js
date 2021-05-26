const { Router } = require('express');
const { Sqlite } = require('../../models');
const sqlite = Router();
const { support } = require('../../support');
const { authToken } = support;
const person = new Sqlite();
const { getPersons, postPerson, deletePerson, updatePerson } = person;


sqlite.get('/', authToken, getPersons);
sqlite.post('/', authToken, postPerson);
sqlite.put('/', authToken, updatePerson);
sqlite.delete('/', authToken, deletePerson);

module.exports = sqlite;