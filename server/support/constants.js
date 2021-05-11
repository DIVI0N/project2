const
  PORT = 3000,
  secret = '!ksdd*sd21D(21saQ;kvRrnzg',

  message = {
    userNotFound: 'Пользователь не найден',
    invalidPass: 'Неверный пароль',
    abstractErr: 'Что-то пошло не так',
    userAlreadyReg: 'Такой пользователь уже существует',
    regSuccess: 'Вы успешно за зарегистрировались',
    invalidData: 'Некорректные данные',
    invalidEmail: 'Некорректный email',
    authFail: 'Вы не авторизированы',
    changed: 'Данные изменены'
  };


module.exports = {
  PORT, message, secret
};