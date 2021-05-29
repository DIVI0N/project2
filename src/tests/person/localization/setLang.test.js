import { setLang } from '../../../modules';
import { modalDOMen, modalDOMru, modalIPT, modalTXT } from './localizationHelper';

const standartTest = (func) => {
  it('should be defined ', function () {
    expect(func).toBeDefined();
  });
  it('should be function', function () {
    expect(typeof func).toBe('function');
  });
};
import { support } from '../../../modules/helpers/support';
jest.mock('../../../modules/helpers/support', () => ({
  support: {
    lsGet: jest.fn().mockImplementation(() => 'ru')
  }
}));
describe('setLang ', () => {
  document.body.innerHTML = modalDOMen;
  standartTest(setLang);
  it('should be valid translate', () => {
    setLang(modalTXT, modalIPT);
    expect(document.body.innerHTML).toBe(modalDOMru);
  });
  it('should be invalid translate', () => {
    setLang(modalTXT, modalIPT);
    expect(document.body.innerHTML).not.toBe(modalDOMen);
  });
  it('should be invalid translate', () => {
    support.lsGet = jest.fn().mockReturnValue(undefined);
  });
});

