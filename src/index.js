import { localization, login, registration, sendPerson, setting, theme } from './modules';
import './styles/index.scss';

window.addEventListener('DOMContentLoaded', () => {
  if (location.pathname === '/' || location.pathname === '/index.html') {
    login();
  }
  else if (location.pathname === '/registration.html') {
    registration();
  }
  else if (location.pathname === '/person.html') {
    localization();
    theme();
    setting();
    sendPerson();
  }
});
