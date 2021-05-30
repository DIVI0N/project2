export const
  message =
  {
    invalidLogin: {
      en: 'Login must consist of 4-20 latin characters and numbers',
      ru: 'Логин должен состоять из 4-20 латинcких символов и цифр'
    },
    invalidPass: {
      en: 'Password must consist of 8-14 latin and special characters and numbers',
      ru: 'Пароль должен состоять из 8-14 латинcких и спец символов, и цифр'
    },
    invalidRepeatPass: {
      en: 'Password doesn`t match',
      ru: 'Не совпадает пароль'
    },
    changedData: {
      en: 'Data have been changed',
      ru: 'Данные изменены'
    },
    repeatUser: {
      en: 'This login is already taken',
      ru: 'Этот логин уже занят'
    },
    firstName: {
      en: 'Name must be 1-30 letters long',
      ru: 'Имя должно состоять из 1-30 букв'
    },
    lastName: {
      en: 'Last name must be 1-30 letters long',
      ru: 'Фамилия должна состоять из 1-30 букв'
    },
    age: {
      en: 'Age must be in range 0-150',
      ru: 'Возраст должен быть в пределах 0-150'
    },
    city: {
      en: 'City name must be 1-30 letters long',
      ru: 'Название города должно состоять из 1-30 букв'
    },
    phone: {
      en: 'Phone number must contain + and 10-15 digits',
      ru: 'Номер телефона должен содержать + и 10-15 цифр'
    },
    email: {
      en: 'Invalid email',
      ru: 'Нвалидный email'
    },
    company: {
      en: 'Company name name must be 1-50 letters long',
      ru: 'Название компании должно состоять из 1-50 букв'
    },
  },
  validationReg = {
    firstName: /^[a-zA-ZА-Яа-я]{1,30}$/,
    lastName: /^[a-zA-ZА-Яа-я]{1,30}$/,
    age: /^([1-9]\d?|1[0-4]\d|150)$/,
    city: /^[a-zA-ZА-Яа-я]{0,30}$/,
    phone: /^\++?[0-9]{10,15}$/,
    email: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
    company: /^[a-zA-ZА-Яа-я]{0,50}$/
  };