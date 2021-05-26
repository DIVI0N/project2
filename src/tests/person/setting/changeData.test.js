const standartTest = (func) => {
  it('should be defined ', () => {
    expect(func).toBeDefined();
  });
  it('should be function', () => {
    expect(typeof func).toBe('function');
  });
};
import 'regenerator-runtime';
import { message, url } from '../../../modules';
import { getFetch } from '../../../modules/helpers/getFetch';
import AuthHelper from '../../../modules/helpers/authHelper';
import { changeData } from '../../../modules/person/setting/changeData';

jest.mock('../../../modules/helpers/getFetch', () => ({
  getFetch: jest.fn().mockImplementation((url, body, method) => {
    return new Promise((res, rej) => {
      if (body.login === 'Alex') res();
      else rej();
    });
  })
}));
jest.mock('../../../modules/helpers/authHelper', () => (jest.fn().mockReturnValue({
  showErr: jest.fn()
})));

describe('closeModal', () => {
  let login = 'Alex';
  let password = 'admin123';
  let repeatPass = 'admin123';
  const { showErr } = new AuthHelper();
  standartTest(changeData);
  beforeEach(() => {
    localStorage.setItem('lang', 'en');
  });
  afterEach(() => {
    login = 'Alex';
    password = 'admin123';
    repeatPass = 'admin123';
    localStorage.removeItem('lang');
  });
  it('should be valid data', async () => {
    await changeData(login, password, repeatPass);
    const body = {
      login, password
    };
    expect(getFetch).toHaveBeenCalledWith(url.auth.setting, body, 'POST');
  });
  it('should be invalid login', async () => {
    login = '@e1123';
    const lang = localStorage.getItem('lang');
    changeData(login, password, repeatPass);
    expect(showErr).toHaveBeenCalledWith(message.invalidLogin[lang]);
  });
  it('should be invalid password', async () => {
    password = 'dasd1';
    const lang = localStorage.getItem('lang');
    changeData(login, password, repeatPass);
    expect(showErr).toHaveBeenCalledWith(message.invalidPass[lang]);
  });
  it('should be invalid password', async () => {
    repeatPass = 'dasd1adasdada';
    const lang = localStorage.getItem('lang');
    changeData(login, password, repeatPass);
    expect(showErr).toHaveBeenCalledWith(message.invalidRepeatPass[lang]);
  });
  it('should be invalid password', async () => {
    const lang = localStorage.getItem('lang');
    changeData();
    expect(showErr).toHaveBeenCalledWith(message.invalidLogin[lang]);
  });
});