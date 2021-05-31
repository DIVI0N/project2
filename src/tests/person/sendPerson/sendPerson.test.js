
const standartTest = (func) => {
  it('should be defined ', () => {
    expect(func).toBeDefined();
  });
  it('should be function', () => {
    expect(typeof func).toBe('function');
  });
};

import { getData, getFetch, getPerson, message, PersonHelper, support, url, validationReg } from '../../../modules';
import { closeModal } from '../../../modules/person/setting/settingHelpers';
jest.mock('../../../modules/person/setting/settingHelpers', () => ({
  closeModal: jest.fn()
}));
import { dom, messageHelp } from './sendPersonHelper';
jest.mock('../../../modules', () => ({
  support: {
    lsGet: jest.fn().mockReturnValue('mongodb'),
  },
  getData: jest.fn(),
  getFetch: jest.fn(),
  getPerson: jest.fn(),
  PersonHelper: jest.fn().mockReturnValue({
    wordValidation: jest.fn().mockReturnValue(true),
    changeCreateIpt: jest.fn()
  }),
  validationReg: jest.fn(),
  url: { database: '/database' },
  message: {
    invalidLogin: {
      en: 'Login must consist of 4-20 latin characters and numbers',
      ru: 'Логин должен состоять из 4-20 латинcких символов и цифр'
    },
    invalidPass: {
      en: 'Password must consist of 8-14 latin and special characters and numbers',
      ru: 'Пароль должен состоять из 8-14 латинcких и спец символов, и цифр'
    },
    invalidRepeatPass: {
      en: 'Password doesn`t match',
      ru: 'Не совпадает пароль'
    },
    changedData: {
      en: 'Data have been changed',
      ru: 'Данные изменены'
    },
    repeatUser: {
      en: 'This login is already taken',
      ru: 'Этот логин уже занят'
    },
    firstName: {
      en: 'Name must be 1-30 letters long',
      ru: 'Имя должно состоять из 1-30 букв'
    },
    lastName: {
      en: 'Last name must be 1-30 letters long',
      ru: 'Фамилия должна состоять из 1-30 букв'
    },
    age: {
      en: 'Age must be in range 0-150',
      ru: 'Возраст должен быть в пределах 0-150'
    },
    city: {
      en: 'City name must be 1-30 letters long',
      ru: 'Название города должно состоять из 1-30 букв'
    },
    phone: {
      en: 'Phone number must contain + and 10-15 digits',
      ru: 'Номер телефона должен содержать + и 10-15 цифр'
    },
    email: {
      en: 'Invalid email',
      ru: 'Нвалидный email'
    },
    company: {
      en: 'Company name name must be 1-50 letters long',
      ru: 'Название компании должно состоять из 1-50 букв'
    },
  }
}));

import sendPerson from '../../../modules/person/sendPerson/sendPerson';
const { wordValidation, changeCreateIpt } = new PersonHelper();
document.body.innerHTML = dom;
describe('sendPerson', () => {
  standartTest(sendPerson);
  it('should be input listener', async () => {
    sendPerson();
    const createPersonBlock = document.querySelector('#createPerson');
    const evt = new Event('input');
    createPersonBlock.dispatchEvent(evt);
    expect(changeCreateIpt).toHaveBeenCalledTimes(7);
  });
  it('should be click listener', async () => {
    sendPerson();
    const createPersonBlock = document.querySelector('#createPerson');

    const evt = new Event('click');
    createPersonBlock.dispatchEvent(evt);
    const create = document.querySelector('#create');
    create.click();

    expect(wordValidation).toHaveBeenCalled();
    expect(getFetch).toHaveBeenCalled();
  });
  it('should be click listener empty ls and valid false', async () => {
    support.lsGet = jest.fn().mockReturnValue(undefined);
    wordValidation.mockReturnValue(false);
    sendPerson();
    const createPersonBlock = document.querySelector('#createPerson');

    const evt = new Event('click');
    createPersonBlock.dispatchEvent(evt);
    const create = document.querySelector('#create');
    create.click();

    expect(wordValidation).toHaveBeenCalled();
  });

  it('should be click clearall', async () => {

    sendPerson();
    const createPersonBlock = document.querySelector('#createPerson');

    const evt = new Event('click');
    createPersonBlock.dispatchEvent(evt);
    const clearAll = document.querySelector('#clearAll');
    clearAll.click();

    expect(closeModal).toHaveBeenCalled();
  });

  it('should be click background', async () => {
    sendPerson();
    const createPersonBlock = document.querySelector('#createPerson');
    const evt = new Event('click');
    createPersonBlock.dispatchEvent(evt);
    const modal = document.getElementById('modalClear');
    modal.click();

    expect(modal.style.display).toBe('none');
  });

  it('should be click clear', async () => {
    sendPerson();
    const createPersonBlock = document.querySelector('#createPerson');
    const evt = new Event('click');
    createPersonBlock.dispatchEvent(evt);
    const clear = document.getElementById('clearAllBtn');
    clear.click();

    expect(getData).toHaveBeenCalled();
    expect(getPerson).toHaveBeenCalled();
  });
});