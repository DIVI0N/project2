import registration from '../../modules/auth/registration';
import { registrationPage } from './authHelper';

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
    ok: true,
    json: jest.fn().mockReturnValue({

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
    },
    invalidRepeatPass: {
      en: '',
      ru: ''
    }
  },
  url: {
    client: ''
  },
}));

describe('registration ', () => {
  const realLocation = window.location;
  beforeEach(() => {
    delete window.location;
    window.location = {
      replace: jest.fn()
    };
  });
  afterEach(() => window.location = realLocation);
  const { showErr, togglePassword } = new AuthHelper();
  document.body.innerHTML = registrationPage;
  standartTest(registration);
  it('should be called toggle password before event', () => {
    registration();
    const pass = document.querySelector('.input-password');
    const passwordRepeat = document.querySelector('.input-repeat');
    expect(togglePassword).toHaveBeenCalledTimes(2);
    expect(togglePassword).toHaveBeenCalledWith(pass);
    expect(togglePassword).toHaveBeenCalledWith(passwordRepeat);
  });

  it('should be invalid login', async () => {
    registration();
    const evt = new Event('click');
    const regBtn = document.querySelector('#registration');
    const loginIpt = document.querySelector('.input-login');
    loginIpt.value = 'Алекс';
    regBtn.dispatchEvent(evt);
    expect(showErr).toHaveBeenCalledWith(message.invalidLogin[support.lsGet()]);
    loginIpt.value = 'admin';
  });
  it('should be invalid pass', async () => {
    registration();
    const evt = new Event('click');
    const regBtn = document.querySelector('#registration');
    const pass = document.querySelector('.input-password');
    pass.value = 'Алекс12a@';
    regBtn.dispatchEvent(evt);
    expect(showErr).toHaveBeenCalledWith(message.invalidPass[support.lsGet()]);
    pass.value = 'admin123';
  });

  it('shouldn`t be match pass', async () => {
    registration();
    const evt = new Event('click');
    const regBtn = document.querySelector('#registration');
    const pass = document.querySelector('.input-password');
    const passwordRepeat = document.querySelector('.input-repeat');
    passwordRepeat.value = 'admin1233';
    pass.value = 'admin123';
    regBtn.dispatchEvent(evt);
    expect(showErr).toHaveBeenCalledWith(message.invalidPass[support.lsGet()]);
    pass.value = 'admin123';
    passwordRepeat.value = 'admin123';
  });

  it('should be valid data', async () => {
    registration();
    const evt = new Event('click');
    const loginIpt = document.querySelector('.input-login');
    const pass = document.querySelector('.input-password');
    const regBtn = document.querySelector('#registration');
    loginIpt.value = 'admin';
    pass.value = 'admin123';
    regBtn.dispatchEvent(evt);
    expect(getFetch).toHaveBeenCalledWith('/auth/registration', {
      login: loginIpt.value,
      password: pass.value
    }, 'POST');
  });

  it('shouldn`t be token & empty lang', async () => {
    support.lsGet = jest.fn().mockReturnValue(undefined);
    getFetch.mockResolvedValue({
      ok: false,
      json: jest.fn().mockReturnValue({
        message: ''
      })
    });
    registration();
    const evt = new Event('click');
    const loginIpt = document.querySelector('.input-login');
    const pass = document.querySelector('.input-password');
    const regBtn = document.querySelector('#registration');
    loginIpt.value = 'admin';
    pass.value = 'admin123';
    regBtn.dispatchEvent(evt);
    // expect(showErr).toHaveBeenCalledTimes(1);
  });
});