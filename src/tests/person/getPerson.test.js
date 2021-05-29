import getPerson from '../../modules/person/getPerson';

const standartTest = (func) => {
  it('should be defined ', () => {
    expect(func).toBeDefined();
  });
  it('should be function', () => {
    expect(typeof func).toBe('function');
  });
};

import { getData, row, support, url } from '../../modules';
jest.mock('../../modules', () => ({
  support: {
    lsGet: jest.fn().mockReturnValue('mongodb'),
  },
  getData: jest.fn().mockImplementation(() => ({
    statusText: 'Auth',
    json: jest.fn().mockReturnValue({
      message: ''
    })
  })),
  row: jest.fn(),
  url: { database: '/database' }
}));

describe('getPerson', () => {
  standartTest(getPerson);
  it('should be person auth', async () => {
    await getPerson();
    expect(getData).toHaveBeenCalledWith(`${url.database}/${support.lsGet()}`);
    expect(row).toHaveBeenCalledTimes(1);
  });
  jest.resetModules();

  it('should be person Unauthorized and localstorage empty', async () => {
    support.lsGet = jest.fn().mockReturnValue(undefined);
    getData.mockReturnValue({
      statusText: 'Unauthorized',
      json: jest.fn().mockReturnValue({
        message: ''
      })
    });
    await getPerson();

    expect(getData).toHaveBeenCalledWith(`${url.database}/mysql`);
    expect(window.location.pathname).toBe('/');
  });
});