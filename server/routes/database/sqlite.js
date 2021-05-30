const { Router } = require('express');
const { Sqlite } = require('../../models');
const sqlite = Router();
const { support, settingFields } = require('../../support');
const { authToken } = support;
const person = new Sqlite();
const { getPersons, postPerson, deletePerson, updatePerson } = person;


sqlite.get('/', authToken, getPersons);
sqlite.post('/', authToken, settingFields, postPerson);
sqlite.put('/', authToken, settingFields, updatePerson);
sqlite.delete('/', authToken, deletePerson);

module.exports = sqlite;