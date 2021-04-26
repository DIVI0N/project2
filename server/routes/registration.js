const { Router } = require('express');
const { User } = require('../models');
const bcrypt = require('bcryptjs');
const { message } = require('../support/constants');

const registration = Router();

registration.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;

    const candidate = await User.findOne({ email });
    if (candidate) {
      return res.status(400).json({
        message: message.userAlreadeReg
      });
    };

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({ email, password: hashedPassword });

    await user.save();
    res.status(201).json({ message: message.regSuccess });
  }
  catch (e) {
    res.status(500).json({
      message: message.abstractErr
    });
  }

});

module.exports = registration;