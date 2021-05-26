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
      if (sel === 'empty') return false;
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
  const lang = document.querySelector('#lang');
  const ev = new Event('change');
  lang.dispatchEvent(ev);
  it('should be change lang', () => {
    localization();
    expect(support.lsGet).toHaveBeenCalledTimes(2);
    expect(support.lsGet).toHaveBeenCalledTimes(2);
    expect(personLang).toHaveBeenCalled();
    expect(setLang).toHaveBeenCalledTimes(2);
  });

});
