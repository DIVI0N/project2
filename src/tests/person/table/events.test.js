import { deleteRow, changeRowData, blurRow, sortByData } from '../../../modules/person/table/events';
import 'regenerator-runtime';

const standartTest = (func) => {
  it('should be defined ', () => {
    expect(func).toBeDefined();
  });
  it('should be function', () => {
    expect(typeof func).toBe('function');
  });
};

import { getData, getPerson, support, getFetch, row } from '../../../modules';
jest.mock('../../../modules', () => ({
  support: {
    lsGet: jest.fn().mockImplementation(() => 'mongodb'),
    lsSet: jest.fn(),
  },
  url: {
    database: '/database'
  },
  getData: jest.fn().mockResolvedValue({
    json: jest.fn().mockReturnValue({ message: '' })
  }),

  getPerson: jest.fn(),
  getFetch: jest.fn(),
  row: jest.fn()
}));

describe('deleteRow', () => {
  standartTest(deleteRow);
  it('should be called with valid arguments', () => {
    const evt = {
      target: {
        getAttribute: (attribute) => {
          if (attribute === 'id') return 'deleteRow';
          if (attribute === 'data-id') return '123';
        }
      }
    };
    deleteRow(evt);
    expect(getData).toHaveBeenCalled();
    expect(getPerson).toHaveBeenCalled();
  });
  it('should be called with invalidvalid arguments', () => {
    const evt = {
      target: {
        getAttribute: (attribute) => {
          if (attribute === 'id') return 'deleteRow1';
          if (attribute === 'data-id') return '123';
        }
      }
    };
    deleteRow(evt);
    expect(getData).not.toHaveBeenCalled();
    expect(getPerson).not.toHaveBeenCalled();
  });
});

describe('changeRowData', () => {
  standartTest(changeRowData);
  it('should be called with valid arguments', () => {
    const evt = {
      target: {
        classList: {
          contains: (attribute) => {
            if (attribute === 'table__row-item') return true;
            return false;
          },
          add: jest.fn()
        },
        setAttribute: jest.fn()
      }
    };
    changeRowData(evt);
    expect(evt.target.setAttribute).toHaveBeenCalled();
  });
  it('should be called with invalidvalid arguments', () => {
    const evt = {
      target: {
        classList: {
          contains: (attribute) => {
            if (attribute === 'table__row-item1') return true;
            return false;
          }
        },
        setAttribute: jest.fn()
      }
    };
    changeRowData(evt);
    expect(evt.target.setAttribute).not.toHaveBeenCalled();
  });
});

describe('blurRow', () => {
  standartTest(blurRow);
  it('should be called with valid arguments', () => {
    const evt = {
      target: {
        classList: {
          contains: (attribute) => {
            if (attribute === 'table-body') return true;
            return false;
          },
          remove: jest.fn()
        },
        getAttribute: jest.fn(),
        setAttribute: jest.fn(),
        parentElement: {
          getAttribute: jest.fn(),
        }
      }
    };
    blurRow(evt);
    expect(evt.target.setAttribute).toHaveBeenCalled();
    expect(evt.target.getAttribute).toHaveBeenCalled();
    expect(evt.target.parentElement.getAttribute).toHaveBeenCalled();
    expect(support.lsGet).toHaveBeenCalled();
    expect(getFetch).toHaveBeenCalled();
  });
  it('should be called with invalid arguments', () => {
    const evt = {
      target: {
        classList: {
          contains: (attribute) => {
            if (attribute === 'table-body1') return true;
            return false;
          }
        },
        getAttribute: jest.fn(),
        setAttribute: jest.fn(),
        parentElement: {
          getAttribute: jest.fn(),
        }
      }
    };
    blurRow(evt);
    expect(evt.target.setAttribute).not.toHaveBeenCalled();
    expect(evt.target.getAttribute).not.toHaveBeenCalled();
    expect(evt.target.parentElement.getAttribute).not.toHaveBeenCalled();
    expect(support.lsGet).not.toHaveBeenCalled();
    expect(getFetch).not.toHaveBeenCalled();
  });
});

describe('sortByData', () => {
  standartTest(sortByData);
  it('should be called with valid arguments', async () => {
    const evt = {
      target: {
        classList: {
          contains: jest.fn().mockReturnValue(true)
        },
        getAttribute: jest.fn(),
      }
    };
    await sortByData(evt);
    expect(evt.target.getAttribute).toHaveBeenCalled();
    expect(support.lsGet).toHaveBeenCalled();
    expect(getData).toHaveBeenCalled();
    expect(row).toHaveBeenCalled();
  });
  it('should be called with valid arguments', async () => {
    const evt = {
      target: {
        classList: {
          contains: jest.fn().mockReturnValue(false),
        },
        getAttribute: jest.fn(),
      }
    };
    await sortByData(evt);
    expect(evt.target.getAttribute).not.toHaveBeenCalled();
    expect(support.lsGet).not.toHaveBeenCalled();
    expect(getData).not.toHaveBeenCalled();
    expect(row).not.toHaveBeenCalled();
  });
});


