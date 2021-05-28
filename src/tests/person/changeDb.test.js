import { changeDb } from '../../modules';

const standartTest = (func) => {
  it('should be defined ', () => {
    expect(func).toBeDefined();
  });
  it('should be function', () => {
    expect(typeof func).toBe('function');
  });
};
import getPerson from '../../modules/person/getPerson';
import { support } from '../../modules/helpers/support';

jest.mock('../../modules/person/getPerson', () => jest.fn());
jest.mock('../../modules/helpers/support', () => ({
  lsSet: jest.fn(),
  lsGet: jest.fn().mockReturnValue('mongodb')
}));
describe('changeDb', () => {
  standartTest(changeDb);
  const dom = '<select id="dbSelect"><option value="mongodb">1</option></select>';
  document.body.innerHTML = dom;

  it('should be defined ', () => {
    const dbSelect = document.querySelector('#dbSelect');
    changeDb();
    const evt = new Event('change');
    console.log(getPerson);
    // dbSelect.dispatchEvent(evt);
    expect(support.lsSet).toHaveBeenCalledTimes(2);
    // expect(getPerson).toHaveBeenCalledTimes(1);
  });
});