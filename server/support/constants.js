const
  PORT = 3000,
  message = {
    userNotFound: 'Пользователь не найден',
    invalidPass: 'Неверный пароль',
    abstractErr: 'Что-то пошло не так',
    userAlreadyReg: 'Такой пользователь уже существует',
    regSuccess: 'Вы успешно за зарегистрировались',
    invalidData: 'Некорректные данные',
    invalidEmail: 'Некорректный email'
  },
  secret = '!ksdd*sd21D(21saQ;kvRrnzg';

module.exports = {
  PORT, message, secret
};