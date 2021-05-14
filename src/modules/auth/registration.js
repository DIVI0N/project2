import { message, getFetch } from '..';
import AuthHelper from './authHelper';

export default function registration() {
  const
    loginInput = document.querySelector('.input_login'),
    passwordInput = document.querySelector('.input_password'),
    passwordRepeat = document.querySelector('.input_repeat'),
    regBtn = document.querySelector('#registration');

  const { showErr, togglePassword } = new AuthHelper();

  togglePassword(passwordInput);
  togglePassword(passwordRepeat);

  regBtn.addEventListener('click', async () => {
    const loginReg = /^[a-zA-Z0-9]{4,20}$/,
      passReg = /^[a-zA-Z0-9!@$^."№;%:?*\(\)-_=+]{8,14}$/,
      login = loginInput.value,
      pass = passwordInput.value,
      repeatPass = passwordRepeat.value;
    if (!loginReg.test(login)) {
      return showErr(message.invalidLogin);
    }
    else if (!passReg.test(pass)) {
      return showErr(message.invalidPass);
    }
    else if (pass !== repeatPass) {
      return showErr(message.invalidRepeatPass);
    }
    const body = {
      login,
      password: pass
    };
    try {
      const response = await getFetch('/auth/registration', body, 'POST');
      const message = await response.json();
      response.ok ? location.replace('http://localhost:4200/index.html') : showErr(message.message);
    }
    catch (e) {
      throw new Error(e);
    }
  });
}