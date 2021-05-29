import { exit } from '../../modules';

const standartTest = (func) => {
  it('should be defined ', () => {
    expect(func).toBeDefined();
  });
  it('should be function', () => {
    expect(typeof func).toBe('function');
  });
};


describe('exit', () => {
  standartTest(exit);
  const dom = '<a href="index.html" id="exit"></a>';
  document.body.innerHTML = dom;
  it('should be exit', () => {
    exit();
    global.window.localStorage = {
      removeItem: jest.fn()
    };
    const exitBtn = document.querySelector('#exit');
    const evt = new Event('click');
    exitBtn.dispatchEvent(evt);
    expect(window.location.pathname).toBe('/');
  });
});