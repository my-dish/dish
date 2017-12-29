describe('root store', () => {
  afterEach(() => {

    // reset NODE_ENV
    process.env.NODE_ENV = 'development';
  });

  it('should get configureStore and history in NODE_ENV=development', () => {
    process.env.NODE_ENV = 'development';

    const dev = require('../../../src/renderer/store/configureStore');

    expect(dev.history.length).toEqual(1);
    expect(typeof dev.default).toEqual('function');
    expect(dev.default.name).toEqual('configureStore');
    expect(dev.default()).toEqual(expect.objectContaining({
      dispatch      : expect.any(Function),
      getState      : expect.any(Function),
      subscribe     : expect.any(Function),
      replaceReducer: expect.any(Function)
    }));

    jest.resetModules();
  });

  it('should get configureStore and history in NODE_ENV=production', () => {
    process.env.NODE_ENV = 'production';

    const prod = require('../../../src/renderer/store/configureStore');

    expect(prod.history.length).toEqual(1);
    expect(typeof prod.default).toEqual('function');
    expect(prod.default.name).toEqual('configureStore');
    expect(prod.default()).toEqual(expect.objectContaining({
      dispatch      : expect.any(Function),
      getState      : expect.any(Function),
      subscribe     : expect.any(Function),
      replaceReducer: expect.any(Function)
    }));
  });

  it('should return different results', () => {
    process.env.NODE_ENV = 'development';
    const dev = require('../../../src/renderer/store/configureStore');

    // reset cache
    jest.resetModules();

    process.env.NODE_ENV = 'production';
    const prod = require('../../../src/renderer/store/configureStore');

    // location's key is different...
    // histories are the same except location's key
    expect(dev.history.action).toEqual(prod.history.action);
    expect(prod.default()).not.toEqual(dev.default());
  });
});
