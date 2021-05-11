const
  { message, PORT, secret } = require('./constants'),
  support = require('./support'),
  validation = require('./validations');


module.exports = {
  message, PORT, support, secret, validation
};