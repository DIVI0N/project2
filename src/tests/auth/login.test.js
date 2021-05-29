import login from '../../modules/auth/login';
import { authPage } from './authHelper';

const standartTest = (func) => {
  it('should be defined ', function () {
    expect(func).toBeDefined();
  });
  it('should be function', function () {
    expect(typeof func).toBe('function');
  });
};
import { getFetch, message, support, url } from '../../modules';
import AuthHelper from '../../modules/helpers/authHelper';
jest.mock('../../modules/helpers/authHelper', () => (jest.fn().mockReturnValue({
  togglePassword: jest.fn(),
  showErr: jest.fn()
})));

jest.mock('../../modules', () => ({
  support: {
    lsGet: jest.fn().mockImplementation(() => 'ru'),
    lsSet: jest.fn()
  },
  getFetch: jest.fn().mockResolvedValue({
    json: jest.fn().mockReturnValue({
      token: 'token'
    })
  }),
  message: {
    invalidLogin: {
      en: '',
      ru: ''
    },
    invalidPass: {
      en: '',
      ru: ''
    }
  },
  url: {
    client: ''
  },
}));

describe('login ', () => {
  const realLocation = window.location;
  beforeEach(() => {
    delete window.location;
    window.location = {
      replace: jest.fn()
    };
  });
  afterEach(() => window.location = realLocation);
  const { showErr } = new AuthHelper();
  document.body.innerHTML = authPage;
  standartTest(login);
  it('should be called toggle password before event', async () => {
    await login();
    const pass = document.querySelector('.input-password');
    expect(new AuthHelper().togglePassword).toHaveBeenCalledWith(pass);
  });

  it('should be invalid login', async () => {
    await login();
    const evt = new Event('click');
    const loginBtn = document.querySelector('#login');
    const loginIpt = document.querySelector('.input-login');
    loginIpt.value = 'Алекс';
    loginBtn.dispatchEvent(evt);
    expect(showErr).toHaveBeenCalledWith(message.invalidLogin[support.lsGet()]);
    loginIpt.value = 'admin';
  });
  it('should be invalid pass', async () => {
    await login();
    const evt = new Event('click');
    const loginBtn = document.querySelector('#login');
    const pass = document.querySelector('.input-password');
    pass.value = 'Алекс12a@';
    loginBtn.dispatchEvent(evt);
    expect(showErr).toHaveBeenCalledWith(message.invalidPass[support.lsGet()]);
    pass.value = 'admin123';
  });
  it('should be valid data', async () => {
    await login();
    const evt = new Event('click');
    const loginIpt = document.querySelector('.input-login');
    const pass = document.querySelector('.input-password');
    const loginBtn = document.querySelector('#login');
    loginIpt.value = 'admin';
    pass.value = 'admin123';
    loginBtn.dispatchEvent(evt);
    expect(getFetch).toHaveBeenCalledWith('/auth/login', {
      login: loginIpt.value,
      password: pass.value
    }, 'POST');
  });

  it('shouldn`t be token & empty lang', async () => {
    support.lsGet = jest.fn().mockReturnValue(undefined);
    getFetch.mockResolvedValue({
      json: jest.fn().mockReturnValue({
        message: ''
      })
    });
    await login();
    const evt = new Event('click');
    const loginIpt = document.querySelector('.input-login');
    const pass = document.querySelector('.input-password');
    const loginBtn = document.querySelector('#login');
    loginIpt.value = 'admin';
    pass.value = 'admin123';
    loginBtn.dispatchEvent(evt);
    // expect(showErr).toHaveBeenCalledTimes(1);
  });
});