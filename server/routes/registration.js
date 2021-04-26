const { Router } = require('express');
const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jst = require('jsonwebtoken');
const registration = Router();

registration.get('/', (req, res, next) => {

});

registration.post('/', async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Пользователь не найден' });
    };

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(400).json({ message: 'Неверный пароль' })
    }

    const token = jwt.sign(
      { userId: user.id },
      'secret string',
      { expiresIn: '1h' }
    )

    res.json({ token, userId: user.id })
  } catch (e) {

  }

});

registration.put('/', (req, res, next) => {

});

registration.delete('/', (req, res, next) => {

});

module.exports = registration;