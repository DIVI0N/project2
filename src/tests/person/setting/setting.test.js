import { setting } from '../../../modules';
import { changeData } from '../../../modules/person/setting/changeData';
import { closeModal, hidePass } from '../../../modules/person/setting/settingHelpers';
import { modal } from './templates';

const standartTest = (func) => {
  it('should be defined ', () => {
    expect(func).toBeDefined();
  });
  it('should be function', () => {
    expect(typeof func).toBe('function');
  });
};


jest.mock('../../../modules/person/setting/settingHelpers', () => ({
  closeModal: jest.fn(),
  hidePass: jest.fn()
}));
jest.mock('../../../modules/person/setting/changeData', () => ({
  changeData: jest.fn()
}));

describe('closeModal', () => {
  beforeEach(() => document.body.innerHTML = modal);
  afterEach(() => document.body.innerHTML = '');
  standartTest(setting);
  it('should be called without event', () => {
    setting();
    expect(hidePass).toHaveBeenCalledTimes(1);
    expect(closeModal).toHaveBeenCalledTimes(3);
  });

  it('should be called without event', () => {
    setting();
    const button = document.querySelector('#myModal');
    button.click();
    expect(button.style.display).toBe('none');
  });

  it('should be called with window click', () => {
    setting();
    const button = document.querySelector('#myModal');
    const evt = new Event('click');
    global.window.dispatchEvent(evt);
    expect(button.style.display).toBe('');
  });


  it('should be called with change click', () => {
    setting();
    const change = document.querySelector('#change');
    const evt = new Event('click');
    change.dispatchEvent(evt);
    expect(changeData).toHaveBeenCalledTimes(1);
  });
});