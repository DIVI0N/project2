const { Router } = require('express');
const { User } = require('../models');
const bcrypt = require('bcryptjs');
const { message, support } = require('../support');

const registration = Router();

registration.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    const { setResponse } = support;

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

});

module.exports = registration;