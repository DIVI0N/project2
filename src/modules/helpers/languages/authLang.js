import { auth } from './general';

export const
  login = {
    ...auth,
    titleAuth: {
      en: 'AUTHORIZATION',
      ru: 'АВТОРИЗАЦИЯ'
    },
    login: {
      en: 'Log In',
      ru: 'Войти'
    },
    toRegister: {
      en: 'Register now',
      ru: 'К регистрации'
    }
  },
  registration = {
    ...auth,
    titleAuth: {
      en: 'REGISTRATION',
      ru: 'РЕГИСТРАЦИЯ'
    },
    repeatPass: {
      en: 'Repeat password',
      ru: 'Повторите пароль'
    },
    registration: {
      en: 'Registration',
      ru: 'Зарегистрироваться'
    },
    toLogin: {
      en: 'toLogin',
      ru: 'К авторизации'
    }
  };
