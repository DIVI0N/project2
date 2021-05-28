import changeDb from '../../modules/person/changeDb';

const standartTest = (func) => {
  it('should be defined ', () => {
    expect(func).toBeDefined();
  });
  it('should be function', () => {
    expect(typeof func).toBe('function');
  });
};


import { support, getPerson } from '../../modules';

jest.mock('../../modules', () => ({
  support: {
    lsSet: jest.fn(),
    lsGet: jest.fn().mockReturnValue('mongodb'),
  },

  getPerson: jest.fn()
}));
describe('changeDb', () => {
  standartTest(changeDb);
  const dom = '<select id="dbSelect"><option value="mongodb">1</option></select>';
  beforeEach(() => {
    document.body.innerHTML = dom;
  });
  afterEach(() => {
    document.body.innerHTML = '';
  });
  it('should be change event', () => {
    const dbSelect = document.querySelector('#dbSelect');
    changeDb();
    const evt = new Event('change');
    dbSelect.dispatchEvent(evt);
    expect(support.lsSet).toHaveBeenCalledTimes(2);
    expect(getPerson).toHaveBeenCalledTimes(1);
    expect(dbSelect.value).toBe('mongodb');
  });

  it('should be change event', () => {
    const dbSelect = document.querySelector('#dbSelect');
    support.lsGet = jest.fn().mockReturnValue('');
    changeDb();
    expect(dbSelect.value).toBe('');
  });
});