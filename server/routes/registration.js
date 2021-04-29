const { Router } = require('express');
const { User } = require('../models');
const bcrypt = require('bcryptjs');
const { message, support } = require('../support');
const { check, validationResult } = require('express-validator');

const registration = Router();

registration.post(
  '/',
  [
    check('email', 'Некорректный email')
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

      const candidate = await User.findOne({ email });
      if (candidate) {
        return setResponse(res, 400, message.userAlreadyReg);
      };

      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({ email, password: hashedPassword });

      await user.save();

      setResponse(res, 201, message.regSuccess);
    }
    catch (e) {
      setResponse(res, 400, message.abstractErr);
    }
  }
);

module.exports = registration;