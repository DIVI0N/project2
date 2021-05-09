const jwt = require('jsonwebtoken');
const { message, secret } = require('./constants');
const { check } = require('express-validator');

const support = {
  setResponse: (res, status, message) => {
    return res.status(status).json({
      message
    });
  },

  authToken: (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.sendStatus(401).json(message.authFail);
    jwt.verify(token, secret, (err, user) => {
      if (err) return res.sendStatus(401).json(message.authFail);
      req.user = user;
      next();
    });
  },
  validation: [
    check('login', 'Некорректный login')
      .isLength({ min: 4, max: 20 })
      .isAlphanumeric(),
    check('password', 'Некорректный пароль')
      .isLength({ min: 8, max: 14 })
      .isAscii()
  ],
  validationSetting: [
    check('update', message.invalidEmail)
      .if((value, { req }) => req.body.field === 'login')
      .isLength({ min: 4, max: 20 }).isAlphanumeric(),
    check('update', message.invalidPass)
      .if((value, { req }) => req.body.field === 'password')
      .isLength({ min: 8, max: 14 }).isAscii()
  ],
  dbConnected: async (app, port, arrDB) => {
    try {
      arrDB.forEach(el => {
        el.сonnect();
      });
      app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });
    } catch (e) {
      throw new Error(e);
    }
  },
};

module.exports = support;