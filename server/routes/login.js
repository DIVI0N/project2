const { Router } = require('express');
const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const login = Router();
const { message, support } = require('../support');

login.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    const { setResponse } = support;

    const user = await User.findOne({ email });

    if (!user) {
      return setResponse(res, 400, message.userNotFound);
    };

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return setResponse(res, 400, message.invalidPass);
    }

    const token = jwt.sign(
      { userId: user.id },
      'secret string',
      { expiresIn: '1h' }
    );

    res.json({ token, userId: user.id });
  }
  catch (e) {
    setResponse(res, 400, message.abstractErr);
  }
});

module.exports = login;