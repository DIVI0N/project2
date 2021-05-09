const { Router } = require('express');
const mongo = Router();
const { Mongo } = require('../../models');
const { support } = require('../../support');

const { authToken } = support;

mongo.get('/', authToken, (req, res) => {
  const mongo = new Mongo();
  mongo.getPerson(req, res);
});

mongo.post('/', authToken, (req, res, next) => {
  const mongo = new Mongo();
  mongo.setPerson(req, res);
});

mongo.put('/', authToken, (req, res, next) => {

});

mongo.delete('/', authToken, (req, res, next) => {

});

module.exports = mongo;