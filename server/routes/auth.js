const { Router } = require('express');
const { check } = require('express-validator');
const { User, UserSchema } = require('../models');

const auth = Router();

auth.post(
  '/login',
  [check('email', 'Некорректный email')
    .isEmail({ allow_utf8_local_part: false }),
  check('password', 'Некорректный пароль')
    .isLength({ min: 8, max: 14 })
    .isAscii()
  ],
  async (req, res) => {
    const user = new User(UserSchema);
    user.login(req, res);
  }
);

auth.post(
  '/registration',
  [
    check('email', 'Некорректный email')
      .isEmail({ allow_utf8_local_part: false }),
    check('password', 'Некорректный пароль')
      .isLength({ min: 8, max: 14 })
      .isAscii()
  ],
  async (req, res) => {
    const user = new User(UserSchema);
    user.registration(req, res);
  }
);

module.exports = auth;