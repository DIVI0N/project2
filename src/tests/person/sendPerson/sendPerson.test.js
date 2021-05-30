
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

jest.mock('../../../modules', () => ({
  support: {
    lsGet: jest.fn().mockReturnValue('mongodb'),
  },
  getData: jest.fn(),
  getFetch: jest.fn(),
  getPerson: jest.fn(),
  PersonHelper: jest.fn().mockReturnValue({
    wordValidation: jest.fn(),
    changeCreateIpt: jest.fn()
  }),
  validationReg: jest.fn(),
  url: { database: '/database' },
  message: {}
}));
import dom from './sendPersonHelper';
import sendPerson from '../../../modules/person/sendPerson';
const { wordValidation, changeCreateIpt } = new PersonHelper();
document.body.innerHTML = dom;
describe('sendPerson', () => {
  standartTest(sendPerson);
  it('should be input listener', async () => {
    sendPerson();
    const createPersonBlock = document.querySelector('#createPerson');
    console.log(createPersonBlock);
    const evt = new Event('input');

    createPersonBlock.dispatchEvent(evt);
    expect(changeCreateIpt).toHaveBeenCalledTimes(7);
  });
});