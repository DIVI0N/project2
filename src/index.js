import {
  changeDb, getPerson, localization, login,
  registration, sendPerson, setLang, setting, theme, changeTheme,
  authLang, personLang, tableEvent, liveSearch, exit
} from './modules';
import './styles/index.scss';

window.addEventListener('DOMContentLoaded', () => {
  const { loginTxt, loginIpt, registrationTxt, regIpt } = authLang();
  const { personIpt, personTxt, modalIpt, modalTxt } = personLang();

  if (location.pathname === '/' || location.pathname === '/index.html') {
    login();
    setLang(loginTxt, loginIpt);
    changeTheme();
  }
  else if (location.pathname === '/registration.html') {
    registration();
    setLang(registrationTxt, regIpt);
    changeTheme();
  }
  else if (location.pathname === '/person.html') {
    localization();
    theme();
    changeTheme();
    setting();
    sendPerson();
    getPerson();
    changeDb();
    setLang(personTxt, personIpt);
    setLang(modalTxt, modalIpt);
    tableEvent();
    liveSearch('#findName', 'firstName');
    liveSearch('#findLname', 'lastName');
    exit();
  }
});
