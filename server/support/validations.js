const { check } = require('express-validator');
const { message } = require('./constants');

const validation = {
  auth: [
    check('login', 'Некорректный login')
      .isLength({ min: 4, max: 20 })
      .isAlphanumeric(),
    check('password', 'Некорректный пароль')
      .isLength({ min: 8, max: 14 })
      .isAscii()
  ],
  setting: [
    check('update', message.invalidEmail)
      .if((value, { req }) => req.body.field === 'login')
      .isLength({ min: 4, max: 20 }).isAlphanumeric(),
    check('update', message.invalidPass)
      .if((value, { req }) => req.body.field === 'password')
      .isLength({ min: 8, max: 14 }).isAscii()
  ],
  databases: [

  ]
};

module.exports = validation;