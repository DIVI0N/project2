const
  { message, PORT, secret } = require('./constants'),
  support = require('./support'),
  { validation, settingValidation, settingFields } = require('./validations');


module.exports = {
  message, PORT, support, secret, validation, settingValidation, settingFields
};