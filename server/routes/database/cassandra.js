const { Router } = require('express');
<<<<<<< HEAD
const { Cassandra } = require('../../models/databases');
const cassandra = Router();
const { support, settingFields } = require('../../support');

const { authToken } = support;
const person = new Cassandra();

cassandra.get('/', authToken, (req, res) => {
  person.getRequest(req, res);
});

cassandra.post('/', authToken, settingFields, (req, res) => {
  person.create(req, res);
});

cassandra.put('/', authToken, settingFields, (req, res) => {
  person.updateById(req, res);
});

cassandra.delete('/', authToken, (req, res) => {
  person.delete(req, res);
});

module.exports = cassandra;
=======
const cassandra = Router()

cassandra.get('/', (req, res, next) => {

});

cassandra.post('/', (req, res, next) => {

});

cassandra.put('/', (req, res, next) => {

});

cassandra.delete('/', (req, res, next) => {

});

module.exports = cassandra
>>>>>>> 6e0ced22beb5f68dc22d0da7b5090bb3cddfdae9
