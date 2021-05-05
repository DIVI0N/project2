const auth = require('./auth');
const database = require('./database');
const login = require('./login');
const registration = require('./registration');

module.exports = {
  database,
  login,
  registration,
  auth
};
