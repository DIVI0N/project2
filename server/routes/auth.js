const { Router } = require('express');
const { User, UserSchema } = require('../models');
const { support, validation, settingValidation } = require('../support');
const auth = Router();

auth.post(
  '/login',
  validation.auth,
  async (req, res) => {
    const user = new User(UserSchema);
    user.login(req, res);
  }
);

auth.post(
  '/registration',
  support.authToken,
  validation.auth,
  async (req, res) => {
    const user = new User(UserSchema);
    user.registration(req, res);
  }
);

auth.post(
  '/setting',
  support.authToken,
  settingValidation,
  (req, res) => {
    const user = new User(UserSchema);
    user.setting(req, res);
  }
);

auth.get('/login', support.authToken);
module.exports = auth;