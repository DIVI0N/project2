<<<<<<< HEAD
const auth = require('./auth');
const database = require('./database');


module.exports = {
  database,
  auth
};
=======
const database = require("./database");
const login = require("./login");
const registration = require("./registration");

module.exports = {
  database,
  login,
  registration
}
>>>>>>> 6e0ced22beb5f68dc22d0da7b5090bb3cddfdae9
