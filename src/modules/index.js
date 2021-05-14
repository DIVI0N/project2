import login from './auth/login';
import registration from './auth/registration';
import sendPerson from './person/sendPerson';
import setting from './person/setting';
import theme from './person/theme';
import { server, message } from './helpers/constants';
import getFetch from './helpers/getFetch';
import { support } from './helpers/support';
import localization from './person/localization';

export {
  message, server, getFetch, support
};

export {
  setting, theme, login, registration, sendPerson,
  localization
};
