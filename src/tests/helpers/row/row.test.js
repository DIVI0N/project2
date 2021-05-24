import { row } from "../../../modules";

const standartTest = (func) => {
  it('should be defined ', function () {
    expect(func).toBeDefined();
  });
  it('should be function', function () {
    expect(typeof func).toBe('function');
  });
};

describe('setLang ', () => {

  standartTest(row);

});