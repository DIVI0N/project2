import { message, getFetch, support, url } from '..';
import AuthHelper from '../helpers/authHelper';

export default function registration() {
  const
    { qs, lsGet } = support,
    loginInput = qs('.input-login'),
    passwordInput = qs('.input-password'),
    passwordRepeat = qs('.input-repeat'),
    regBtn = qs('#registration'),
    lang = lsGet('lang') || 'en';

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
      return showErr(message.invalidLogin[lang]);
    }
    else if (!passReg.test(pass)) {
      return showErr(message.invalidPass[lang]);
    }
    else if (pass !== repeatPass) {
      return showErr(message.invalidRepeatPass[lang]);
    }
    const body = {
      login,
      password: pass
    };
    try {
      const response = await getFetch('/auth/registration', body, 'POST');
      const message = await response.json();
      response.ok ? location.replace(`${url.client}/index.html`) : showErr(message.message);
    }
    catch (e) {
      throw new Error(e);
    }
  });
}