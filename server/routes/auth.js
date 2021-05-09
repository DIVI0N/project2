const { Router } = require('express');
const { check } = require('express-validator');
const { User, UserSchema } = require('../models');
const { support } = require('../support');
const auth = Router();

auth.post(
  '/login',
  [check('login', 'Некорректный email')
    .isAlphanumeric()
    .isLength({ min: 4, max: 20 }),
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
    check('login', 'Некорректный email')
      .isLength({ min: 4, max: 20 })
      .isAlphanumeric(),
    check('password', 'Некорректный пароль')
      .isLength({ min: 8, max: 14 })
      .isAscii()
  ],
  async (req, res) => {
    const user = new User(UserSchema);
    user.registration(req, res);
  }
);

auth.post('/setting', support.authToken, (req, res) => {
  const user = new User(UserSchema);
  user.setting(req, res);
});
module.exports = auth;