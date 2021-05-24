import { localization } from '../../../modules';
import { langSelect } from './localizationHelper';

const standartTest = (func) => {
  it('should be defined ', function () {
    expect(func).toBeDefined();
  });
  it('should be function', function () {
    expect(typeof func).toBe('function');
  });
};

jest.mock('../../../modules/helpers/support', () => ({
  support: {
    lsGet: jest.fn().mockImplementation(() => 'ru'),
    lsSet: jest.fn(),
    qs: document.querySelector('#lang')
  }
}));

describe('setLang ', () => {
  document.body.innerHTML = langSelect;
  standartTest(localization);
  const ev = new Event('mousemove');
  paint.canvas.dispatchEvent(ev);
  it('should be change lang', () => {
    localization();
    expect().toBe(modalDOMru);
  });
  // it('should be invalid translate', () => {
  //   setLang(modalTXT, modalIPT);
  //   expect(document.body.innerHTML).not.toBe(modalDOMen);
  // });
});
