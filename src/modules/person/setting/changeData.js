import { url, message, getFetch } from '../..';
import AuthHelper from '../../helpers/authHelper';

export const changeData = async (login, password, repeatPass) => {

  const { showErr } = new AuthHelper();

  const loginReg = /^[a-zA-Z0-9]{4,20}$/,
    passReg = /^[a-zA-Z0-9!@$^."№;%:?*\(\)-_=+]{8,14}$/;

  if (!loginReg.test(login)) {
    return showErr(message.invalidLogin[lang]);
  }
  else if (!passReg.test(password)) {
    return showErr(message.invalidPass[lang]);
  }
  else if (password !== repeatPass) {
    return showErr(message.invalidRepeatPass[lang]);
  }
  const body = {
    login,
    password
  };
  try {
    // await getFetch(url.auth.setting, body, 'POST');
  }
  catch (e) {
    throw new Error(e);
  }
};