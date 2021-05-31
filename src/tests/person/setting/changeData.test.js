const standartTest = (func) => {
  it('should be defined ', () => {
    expect(func).toBeDefined();
  });
  it('should be function', () => {
    expect(typeof func).toBe('function');
  });
};
import 'regenerator-runtime';
import { getFetch, message, url } from '../../../modules';
import AuthHelper from '../../../modules/helpers/authHelper';
import { changeData } from '../../../modules/person/setting/changeData';

jest.mock('../../../modules', () => ({
  getFetch: jest.fn().mockResolvedValue({
    ok: true
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
    },
    changedData: {
      en: '',
      ru: ''
    },
    repeatUser: {
      en: '',
      ru: ''
    },
  },
  url: {
    auth: {
      setting: ''
    }
  }
}));
jest.mock('../../../modules/helpers/authHelper', () => (jest.fn().mockReturnValue({
  showErr: jest.fn()
})));

describe('changeData', () => {
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
  it('should be valid data and ok', async () => {
    const lang = localStorage.getItem('lang');
    // console.log(await getFetch());
    await changeData(login, password, repeatPass);
    expect(getFetch).toHaveBeenCalled();
    expect(showErr).toHaveBeenCalledWith(message.changedData[lang], true);
  });
  it('should be valid data and !ok', async () => {
    getFetch.mockResolvedValue({
      ok: false
    });
    const lang = localStorage.getItem('lang');
    // console.log(await getFetch());
    await changeData(login, password, repeatPass);
    expect(getFetch).toHaveBeenCalled();
    expect(showErr).toHaveBeenCalledWith(message.repeatUser[lang]);
  });
});