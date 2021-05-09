const { Router } = require('express');
const { check } = require('express-validator');
const { User, UserSchema } = require('../models');
const { support } = require('../support');
const auth = Router();

auth.post(
  '/login',
  support.validation,
  async (req, res) => {
    const user = new User(UserSchema);
    user.login(req, res);
  }
);

auth.post(
  '/registration',
  support.validation,
  async (req, res) => {
    const user = new User(UserSchema);
    user.registration(req, res);
  }
);

auth.post('/setting',
  support.authToken,
  support.validationSetting,
  (req, res) => {
    const user = new User(UserSchema);
    user.setting(req, res);
  });
module.exports = auth;