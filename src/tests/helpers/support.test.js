import { support } from '../../modules';

const standartTest = (func) => {
  it('should be defined ', function () {
    expect(func).toBeDefined();
  });
  it('should be function', function () {
    expect(typeof func).toBe('function');
  });
};

describe('support ', () => {
  standartTest(support.lsGet);
  standartTest(support.lsSet);
  standartTest(support.qs);
  it('should be lsSet', function () {
    support.lsSet('num', '2');
    expect(localStorage.getItem('num')).toBe('2');
  });
  it('should be lsGet', function () {
    support.lsSet('num', '2');
    expect(support.lsGet('num')).toBe('2');
  });
  it('should be city empty', function () {
    document.body.innerHTML = '<div></div>';
    const el = document.querySelector('div');
    expect(support.qs('div')).toEqual(el);
  });
});