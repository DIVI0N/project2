const standartTest = (func) => {
  it('should be defined ', () => {
    expect(func).toBeDefined();
  });
  it('should be function', () => {
    expect(typeof func).toBe('function');
  });
};

import { tableEvent } from '../../../modules';
import { deleteRow, changeRowData, blurRow, sortByData } from '../../../modules/person/table/events';
jest.mock('../../../modules/person/table/events', () => ({
  deleteRow: jest.fn(),
  sortByData: jest.fn(),
  changeRowData: jest.fn(),
  blurRow: jest.fn()
}));

describe('tableEvent', () => {
  standartTest(tableEvent);
  document.body.innerHTML = '<div id="mainTable"></div>';
  it('should be click', () => {
    tableEvent();
    const table = document.querySelector('#mainTable');
    const ev = new Event('click');
    table.dispatchEvent(ev);
    expect(deleteRow).toHaveBeenCalled();
    expect(sortByData).toHaveBeenCalled();
  });

  it('should be dblclick', () => {
    tableEvent();
    const table = document.querySelector('#mainTable');
    const ev = new Event('dblclick');
    table.dispatchEvent(ev);
    expect(changeRowData).toHaveBeenCalled();
    const newEv = new Event('blur');
    table.dispatchEvent(newEv);
    expect(blurRow).toHaveBeenCalled();
  });

  it('should be blur', () => {
    tableEvent();
    const table = document.querySelector('#mainTable');
    const newEv = new Event('blur');
    table.dispatchEvent(newEv);
    expect(blurRow).toHaveBeenCalled();
  });
});