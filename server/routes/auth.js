const { Router } = require('express');
const { User, UserSchema } = require('../models');
const { support, validation } = require('../support');
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
  validation.auth,
  async (req, res) => {
    const user = new User(UserSchema);
    user.registration(req, res);
  }
);

auth.post(
  '/setting',
  support.authToken,
  validation.auth,
  (req, res) => {
    const user = new User(UserSchema);
    user.setting(req, res);
  }
);

auth.get('/login', support.authToken);
module.exports = auth;