const auth = {
  logintxt: {
    en: 'Login',
    ru: 'Логин'
  },
  passwordtxt: {
    en: 'Password',
    ru: 'Пароль'
  },
};
const authIpt = {
  loginIpt: {
    en: 'Enter your login...',
    ru: 'Введите логин...'
  },
  passwordIpt: {
    en: 'Enter your password...',
    ru: 'Введите пароль...'
  },
};

export const authLang = () => ({
  loginTxt: {
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
  registrationTxt: {
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
  },
  loginIpt: {
    ...authIpt
  },
  regIpt: {
    ...authIpt,
    repeatPassIpt: {
      en: 'Repeat your password ...',
      ru: 'Повторите пароль...'
    }
  }
});

export const personLang = () => ({
  personTxt: {
    themeLight: {
      en: 'Light',
      ru: 'Светлая'
    },
    themeDark: {
      en: 'Dark',
      ru: 'Темная'
    },
    dbTitle: {
      en: 'Database',
      ru: 'База данных'
    },
    create: {
      en: 'Create',
      ru: 'Создать'
    },
    clearAll: {
      en: 'Clear All',
      ru: 'Очистить все'
    },
    fnameSpn: {
      en: 'FName',
      ru: 'Имя'
    },
    lnameSpn: {
      en: 'LName',
      ru: 'Фамилия'
    },
    ageSpn: {
      en: 'Age',
      ru: 'Возр.'
    },
    citySpn: {
      en: 'City',
      ru: 'Город'
    },
    phoneSpn: {
      en: 'Phone number',
      ru: 'Телефон'
    },
    emailSpn: {
      en: 'Email',
      ru: 'Почта'
    },
    companySpn: {
      en: 'Company name',
      ru: 'Компания'
    },
  },
  personIpt: {
    firstName: {
      en: 'Fname*',
      ru: 'Имя*'
    },
    lastName: {
      en: 'Iname*',
      ru: 'Фамилия*'
    },
    age: {
      en: 'Age*',
      ru: 'Возраст*'
    },
    city: {
      en: 'City',
      ru: 'Город'
    },
    phone: {
      en: 'Phone Number',
      ru: 'Телефон'
    },
    email: {
      en: 'Email*',
      ru: 'Почта*'
    },
    company: {
      en: 'Company Name',
      ru: 'Компания'
    },
    findName: {
      en: 'Find by fname...',
      ru: 'Найти по имени'
    },
    findLname: {
      en: 'Find by lname...',
      ru: 'Найти по фамилии'
    },
  },
  modalTxt: {
    settingTitle: {
      en: 'SETTING',
      ru: 'Настройки'
    },
    changeLogin: {
      en: 'Change Login',
      ru: 'Измените логин'
    },
    changePassword: {
      en: 'Change Password',
      ru: 'Измените пароль'
    },
    repeatPass: {
      en: 'Repeat Password',
      ru: 'Повторите пароль'
    },
    change: {
      en: 'Change',
      ru: 'Изменить'
    },
    cancel: {
      en: 'Cancel',
      ru: 'Отменить'
    },
  },
  modalIpt: {
    changeLoginIpt: {
      en: 'Enter new login',
      ru: 'Введите новый логин'
    },
    changePasswordIpt: {
      en: 'Enter new password',
      ru: 'Введите новый пароль'
    },
    changeRepeatIpt: {
      en: 'Repeat password',
      ru: 'Повторите пароль'
    },
  }

});