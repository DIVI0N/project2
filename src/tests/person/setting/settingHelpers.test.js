import { closeModal, hidePass } from '../../../modules/person/setting/settingHelpers';
const standartTest = (func) => {
  it('should be defined ', () => {
    expect(func).toBeDefined();
  });
  it('should be function', () => {
    expect(typeof func).toBe('function');
  });
};

import AuthHelper from '../../../modules/helpers/authHelper';
import { closmodalTemplate } from './templates';
jest.mock('../../../modules/helpers/authHelper', () => (jest.fn().mockReturnValue({
  togglePassword: jest.fn()
})));

describe('closeModal', () => {
  standartTest(closeModal);
  document.body.innerHTML = closmodalTemplate;
  const trigger = document.querySelector('.trigger');
  const elem = document.querySelector('.elem');
  const event = new Event('click');
  it('should be click display = none', () => {
    closeModal(trigger, elem);
    trigger.dispatchEvent(event);
    expect(elem.style.display).toBe('none');
  });
  it('should be click display = block', () => {
    closeModal(trigger, elem, 'block');
    trigger.dispatchEvent(event);
    expect(elem.style.display).toBe('block');
  });
});

describe('hidePass', () => {
  standartTest(hidePass);
  it('should be togglepassword', () => {
    hidePass();
    expect(new AuthHelper().togglePassword).toHaveBeenCalledTimes(2);
  });
});