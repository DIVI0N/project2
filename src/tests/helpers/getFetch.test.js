import { getFetch, getData } from '../../modules';

const standartTest = (func) => {
  it('should be defined ', function () {
    expect(func).toBeDefined();
  });
  it('should be function', function () {
    expect(typeof func).toBe('function');
  });
};


describe('getFetch ', () => {
  standartTest(getFetch);

  const url = 'https://jsonplaceholder.typicode.com/todos/1';
  const getAnswer = { helloText: 'hi from jsonPlaceHolder' };
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({ json: jest.fn().mockReturnValue(getAnswer) });
  });
  afterEach(() => {
    delete global.fetch;
  });
  it('should call fetch , withBody', async () => {
    await getFetch(url, {});
    expect(global.fetch).toHaveBeenCalled();
  });
  it('should call fetch , withoutBody', async () => {
    await getFetch(url);
    expect(global.fetch).toHaveBeenCalled();
  });
});

describe('getData ', () => {
  standartTest(getData);

  const url = 'https://jsonplaceholder.typicode.com/todos/1';
  const getAnswer = { helloText: 'hi from jsonPlaceHolder' };
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({ json: jest.fn().mockReturnValue(getAnswer) });
  });
  afterEach(() => {
    delete global.fetch;
  });
  it('should call fetch , get', async () => {
    await getData(url);
    expect(global.fetch).toHaveBeenCalled();
  });
  it('should call fetch , post', async () => {
    await getData(url, 'Post');
    expect(global.fetch).toHaveBeenCalled();
  });
});