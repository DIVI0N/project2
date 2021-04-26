const { Router } = require('express');
const { User } = require('../models');
const bcrypt = require('bcryptjs');

const login = Router();

login.get('/', (req, res, next) => {

});

login.post('/', async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const candidate = await User.findOne({ email });
    if (candidate) {
      return res.status(400).json({
        message: 'Такой пользователь уже существует'
      });
    };

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({ email, password: hashedPassword })

    await user.save()

    res.status(201).json({ message: 'Вы успешно за зарегистрировались' })
  }
  catch (e) {
    res.status(500).json({
      message: 'Something been wrong'
    })
  }
});

login.put('/', (req, res, next) => {

});

login.delete('/', (req, res, next) => {

});

module.exports = login