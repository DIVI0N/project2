import {
  changeDb, getPerson, localization, login,
  registration, sendPerson, setLang, setting, theme, personPage, authPage,
  authLang, personLang, tableEvent, liveSearch
} from './modules';
import './styles/index.scss';

window.addEventListener('DOMContentLoaded', () => {
  const { loginTxt, loginIpt, registrationTxt, regIpt } = authLang();
  const { personIpt, personTxt, modalIpt, modalTxt } = personLang();

  if (location.pathname === '/' || location.pathname === '/index.html') {
    login();
    setLang(loginTxt, loginIpt);
    theme(authPage);
  }
  else if (location.pathname === '/registration.html') {
    registration();
    setLang(registrationTxt, regIpt);
  }
  else if (location.pathname === '/person.html') {
    localization();
    theme(personPage);
    setting();
    sendPerson();
    getPerson();
    changeDb();
    setLang(personTxt, personIpt);
    setLang(modalTxt, modalIpt);
    tableEvent();
    liveSearch('#findName', 'firstName');
    liveSearch('#findLname', 'lastName');
  }
});
