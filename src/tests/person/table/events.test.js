import { deleteRow } from '../../../modules/person/table/events';

const standartTest = (func) => {
  it('should be defined ', () => {
    expect(func).toBeDefined();
  });
  it('should be function', () => {
    expect(typeof func).toBe('function');
  });
};

jest.mock('../../../modules/helpers/support', () => ({
  support: {
    lsGet: jest.fn().mockImplementation(() => 'mongodb'),
    lsSet: jest.fn(),
  },
  url: {
    database: '/database'
  },
  getData: jest.fn(),
  getPerson: jest.fn()
}));

describe('setLang ', () => {
  standartTest(deleteRow);
  it('should be function', async () => {
    const evt = {
      target: {
        getAttribute: (attribute) => {
          if (attribute === 'id') return 'deleteRow';
          if (attribute === 'data-id') return '123';
        }
      }
    };
    deleteRow(evt);
    expect().toBe();
  });
});
