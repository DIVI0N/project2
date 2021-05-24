import login from './auth/login';
import registration from './auth/registration';
import sendPerson from './person/sendPerson';
import setting from './person/setting';
import theme, { changeTheme } from './person/theme';
import { message, validationReg } from './helpers/constants';
import { getFetch, getData } from './helpers/getFetch';
import { support } from './helpers/support';
import PersonHelper from './helpers/personHelper';
import { row } from './helpers/row';
import getPerson from './person/getPerson';
import { url } from './helpers/url';
import changeDb from './person/changeDb';
import { authLang, personLang } from './helpers/language';
import tableEvent from './person/table/tableEvent';
import liveSearch from './person/liveSearch';
import { localization, setLang } from './person/localization';

export {
  message, getFetch, support, validationReg, PersonHelper, row, url,
  getData, authLang, personLang
};

export {
  setting, theme, changeTheme, login, registration, sendPerson,
  getPerson, changeDb, tableEvent,
  liveSearch, localization, setLang
};
