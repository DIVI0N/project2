import login from './auth/login';
import registration from './auth/registration';
import sendPerson from './person/sendPerson';
import setting from './person/setting';
import theme from './person/theme';
import { message, validationReg } from './helpers/constants';
import { getFetch, getData } from './helpers/getFetch';
import { support } from './helpers/support';
import localization, { setLang } from './person/localization';
import PersonHelper from './helpers/personHelper';
import { row } from './helpers/row';
import getPerson from './person/getPerson';
import { url } from './helpers/url';
import changeDb from './person/changeDb';
import { authLang, personLang } from './helpers/language';

export {
  message, getFetch, support, validationReg, PersonHelper, row, url,
  getData, authLang, personLang
};

export {
  setting, theme, login, registration, sendPerson,
  localization, getPerson, changeDb, setLang
};
