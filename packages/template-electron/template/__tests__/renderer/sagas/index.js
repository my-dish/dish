import rootSaga from '../../../src/renderer/sagas';

describe('root saga', () => {
  it('should register sagas', () => {
    const tasks = 2;

    expect(rootSaga().next().value.length).toEqual(tasks);
  });
});
