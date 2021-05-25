const { check } = require('express-validator');

const validation = {
  auth: [
    check('login', 'Некорректный login')
      .isLength({ min: 4, max: 20 })
      .isAlphanumeric(),
    check('password', 'Некорректный пароль')
      .isLength({ min: 8, max: 14 })
      .isAscii()
  ],
};

module.exports = validation;