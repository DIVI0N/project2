import { url, message, getFetch } from '../..';
import AuthHelper from '../../helpers/authHelper';

export const changeData = async (login, password, repeatPass) => {
  const { showErr } = new AuthHelper();
  const lang = localStorage.getItem('lang');

  const
    loginReg = /^[a-zA-Z0-9]{4,20}$/,
    passReg = /^[a-zA-Z0-9!@$^."№;%:?*\(\)-_=+]{8,14}$/;

  if (login && !loginReg.test(login)) {
    return showErr(message.invalidLogin[lang]);
  }
  if (password && !passReg.test(password)) {
    return showErr(message.invalidPass[lang]);
  }
  else if (password && password !== repeatPass) {
    return showErr(message.invalidRepeatPass[lang]);
  }

  if (!login && !password) {
    return (showErr(message.invalidLogin[lang]));
  }
  const body = {
    login,
    password
  };
  try {
    const response = await getFetch(url.auth.setting, body, 'POST');
    if (response.ok) {
      showErr(message.changedData[lang], true);
    }
    else if (!response.ok) {
      showErr(message.repeatUser[lang]);
    }
  }
  catch (e) {
    throw new Error('Connection falled');
  }
};