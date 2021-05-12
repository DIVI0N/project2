import login from './auth/login';
import registration from './auth/registration';
import setting from './person/setting';
import theme from './person/theme';
import { server, message } from './support/constants';
import getFetch from './support/getFetch';

export {
  message, server, getFetch
};

export {
  setting, theme, login, registration
};
