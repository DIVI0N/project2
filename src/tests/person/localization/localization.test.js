import localization from '../../../modules/person/localization/localization';
import { langSelect } from './localizationHelper';

const standartTest = (func) => {
  it('should be defined ', function () {
    expect(func).toBeDefined();
  });
  it('should be function', function () {
    expect(typeof func).toBe('function');
  });
};

import { support, personLang, setLang } from '../../../modules';

jest.mock('../../../modules', () => ({
  support: {
    lsGet: jest.fn().mockImplementation((sel) => {
      if (sel === 'lang') return false;
      return 'ru';
    }),
    lsSet: jest.fn(),
  },
  personLang: jest.fn().mockImplementation(() => ({})),
  setLang: jest.fn()
}));

describe('setLang ', () => {
  document.body.innerHTML = langSelect;
  standartTest(localization);
  it('should be change lang', () => {
    localization();
    const ev = new Event('change');
    const lang = document.querySelector('#lang');

    lang.dispatchEvent(ev);

    expect(support.lsGet).toHaveBeenCalledTimes(2);
    expect(support.lsSet).toHaveBeenCalled();
    expect(personLang).toHaveBeenCalled();
    expect(setLang).toHaveBeenCalledTimes(2);

  });

  it('should not be lang in localstorage ', () => {
    support.lsGet('lang');
    localization();
    expect(support.lsSet).toHaveBeenCalled();
  });
});
