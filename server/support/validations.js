const { check } = require('express-validator');

const validation = {
  auth: [
    check('login', 'Некорректный login')
      .trim()
      .isLength({ min: 4, max: 20 })
      .isAlphanumeric()
      .notEmpty(),
    check('password', 'Некорректный пароль')
      .trim()
      .isLength({ min: 8, max: 14 })
      .isAscii()
      .notEmpty()
  ]
};
const settingValidation = (req, res, next) => {
  const loginReg = /^[a-zA-Z0-9]{4,20}$/,
    passReg = /^[a-zA-Z0-9!@$^."№;%:?*\(\)-_=+]{8,14}$/;
  const { login, password } = req.body;
  if (login && !loginReg.test(login)) {
    return res.status(400).json({
      message: 'Invalid login'
    });
  }
  if (password && !passReg.test(password)) {
    return res.status(400).json({
      message: 'Invalid password'
    });
  }

  if (!login && !password) {
    return res.status(400).json({
      message: 'No data'
    });
  }
  next();
};

const settingFields = (req, res, next) => {
  const
    firstName = /^[a-zA-ZА-Яа-я]{1,30}$/,
    lastName = /^[a-zA-ZА-Яа-я]{1,30}$/,
    age = /^([1-9]\d?|1[0-4]\d|150)$/,
    city = /^[a-zA-ZА-Яа-я-]{0,30}$/,
    phone = /^\++?[0-9]{10,15}$/,
    email = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
    company = /^[a-zA-ZА-Яа-я]{0,50}$/;
  const body = req.body;
  if (body.firstname && !firstName.test(body.firstname)) {
    return res.status(400).json({
      message: 'Invalid data'
    });
  }
  if (body.lastName && !lastName.test(body.lastName)) {
    return res.status(400).json({
      message: 'Invalid data'
    });
  }
  if (body.age && !age.test(body.age)) {
    return res.status(400).json({
      message: 'Invalid data'
    });
  }
  if (body.city && !city.test(body.city)) {
    return res.status(400).json({
      message: 'Invalid data'
    });
  }
  if (body.phone && !phone.test(body.phone)) {
    return res.status(400).json({
      message: 'Invalid data'
    });
  }
  if (body.email && !email.test(body.email)) {
    return res.status(400).json({
      message: 'Invalid data'
    });
  }
  if (body.company && !company.test(body.company)) {
    return res.status(400).json({
      message: 'Invalid data'
    });
  }
  next();
};
module.exports = { validation, settingValidation, settingFields };


