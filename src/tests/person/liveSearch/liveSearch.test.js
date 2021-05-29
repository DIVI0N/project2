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
    new Element();
    liveSearch('#findName', 'firstName');
    const searchEl = document.querySelector('#findName');
    const findElems = document.querySelectorAll('.table__row [data-name="firstName"]');
    console.log(JSON.stringify(findElems[0]));
    // console.log(findElems);
    // console.log(searchEl);
    searchEl.value = 'Al';
    const evt = new Event('input');
    searchEl.dispatchEvent(evt);
  });
});