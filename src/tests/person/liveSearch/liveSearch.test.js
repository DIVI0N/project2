import liveSearch from '../../../modules/person/liveSearch';
import { dom } from './liveSearchHelper';

const standartTest = (func) => {
  it('should be defined ', () => {
    expect(func).toBeDefined();
  });
  it('should be function', () => {
    expect(typeof func).toBe('function');
  });
};
describe('liveSearch', () => {
  standartTest(liveSearch);
  document.body.innerHTML = dom;
  it('should be change event', () => {
    liveSearch('#findName', 'firstName');
    const searchEl = document.querySelector('#findName');
    const evt = new Event('input');
    searchEl.dispatchEvent(evt);
    document.querySelectorAll('.table__row [data-name="firstName"]');
    searchEl.value = 'Alex';
  });
});