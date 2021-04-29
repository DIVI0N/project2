const { Router } = require('express');
const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { message, support } = require('../support');
const { check, validationResult } = require('express-validator');

const login = Router();

login.post(
  '/',
  [check('email', 'Некорректный email')
    .isEmail({ allow_utf8_local_part: false }),
  check('password', 'Некорректный пароль')
    .isLength({ min: 8, max: 14 })
    .isAscii()
  ],
  async (req, res) => {
    const { email, password } = req.body;
    const { setResponse, validator } = support;
    try {
      const errors = validationResult(req);

      if (!validator(email, errors)) {
        return setResponse(res, 400, {
          errors: message.invalidData,
          message: errors.array()
        });
      };

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