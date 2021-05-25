import { row } from '../../../modules';
import { data, data2, dom, outHtml, outHtml2 } from './rowHelper';

const standartTest = (func) => {
  it('should be defined ', function () {
    expect(func).toBeDefined();
  });
  it('should be function', function () {
    expect(typeof func).toBe('function');
  });
};

describe('setLang ', () => {
  document.body.innerHTML = dom;
  standartTest(row);

  it('should be data', function () {
    row(data);
    expect(document.body.innerHTML).toBe(outHtml);
  });
  it('should be city empty', function () {
    row(data2);
    expect(document.body.innerHTML).toBe(outHtml2);
  });
});