import { getFetch, message } from '..';
import AuthHelper from '../helpers/authHelper';

export default async function login() {
  const
    login = document.querySelector('.input_login'),
    pass = document.querySelector('.input_password'),
    loginBtn = document.querySelector('#login');

  const { togglePassword, showErr } = new AuthHelper();

  togglePassword(pass);

  loginBtn.addEventListener('click', async () => {
    const loginReg = /^[a-zA-Z0-9]{4,20}$/;
    const passReg = /^[a-zA-Z0-9!@$^."№;%:?*\(\)-_=+]{8,14}$/;
    if (!loginReg.test(login.value)) {
      return showErr(message.invalidLogin);
    }
    else if (!passReg.test(pass.value)) {
      return showErr(message.invalidPass);
    }
    const body = {
      login: login.value,
      password: pass.value
    };
    try {
      const getToken = await getFetch('/auth/login', body, 'POST');
      const token = await getToken.json();
      localStorage.setItem('token', token.token);
      token.token ? location.replace('http://localhost:4200/person.html') : showErr(token.message);
    }
    catch (e) {
      throw new Error(e);
    }
  });
}
