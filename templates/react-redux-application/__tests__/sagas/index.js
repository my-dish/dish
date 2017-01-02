import rootSaga from '../../src/sagas';

describe('root saga', () => {
  it('should register sagas', () => {
    const tasks = 1;

    expect(rootSaga()._invoke().value.length).toEqual(tasks);
  });
});
