import { getFetch, message, support, url } from '..';
import AuthHelper from '../helpers/authHelper';

export default async function login() {
  const { qs, lsGet } = support,
    login = qs('.input-login'),
    pass = qs('.input-password'),
    loginBtn = qs('#login'),
    lang = lsGet(lang) || 'en';

  const { togglePassword, showErr } = new AuthHelper();

  togglePassword(pass);

  loginBtn.addEventListener('click', async () => {
    const loginReg = /^[a-zA-Z0-9]{4,20}$/;
    const passReg = /^[a-zA-Z0-9!@$^."№;%:?*\(\)-_=+]{8,14}$/;
    if (!loginReg.test(login.value)) {
      return showErr(message.invalidLogin[lang]);
    } else if (!passReg.test(pass.value)) {
      return showErr(message.invalidPass[lang]);
    }
    const body = {
      login: login.value,
      password: pass.value,
    };
    try {
      const getToken = await getFetch('/auth/login', body, 'POST');
      const token = await getToken.json();
      localStorage.setItem('token', token.token);
      token.token ? location.replace(`${url.client}/person.html`) : showErr(token.message);
    }
    catch (e) {
      throw new Error(e);
    }
  });
}
