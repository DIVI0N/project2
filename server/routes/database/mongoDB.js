const { Router } = require('express');
<<<<<<< HEAD
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
=======
const mongo = Router()

mongo.get('/', (req, res, next) => {

});

mongo.post('/', (req, res, next) => {

});

mongo.put('/', (req, res, next) => {

});

mongo.delete('/', (req, res, next) => {

});

module.exports = mongo
>>>>>>> 6e0ced22beb5f68dc22d0da7b5090bb3cddfdae9
