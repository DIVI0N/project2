import {
  changeDb, getPerson, localization, login,
  registration, sendPerson, setLang, setting, theme,
  authLang, personLang
} from './modules';
import './styles/index.scss';

window.addEventListener('DOMContentLoaded', () => {
  const { loginTxt, loginIpt, registrationTxt, regIpt } = authLang();
  const { personIpt, personTxt, modalIpt, modalTxt } = personLang();

  if (location.pathname === '/' || location.pathname === '/index.html') {
    login();
    setLang(loginTxt, loginIpt);
  }
  else if (location.pathname === '/registration.html') {
    registration();
    setLang(registrationTxt, regIpt);
  }
  else if (location.pathname === '/person.html') {
    localization();
    theme();
    setting();
    sendPerson();
    getPerson();
    changeDb();
    setLang(personTxt, personIpt);
    setLang(modalTxt, modalIpt);
  }
});
