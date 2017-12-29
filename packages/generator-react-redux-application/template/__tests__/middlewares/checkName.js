import checkName from '../../src/middlewares/checkName';

// [common file]
const createFakeStore = (fakeData) => ({
  getState() {
    return fakeData;
  }
});

const dispatchWithStoreOf = (storeData, action) => {
  let dispatched = null;
  const dispatch = checkName(createFakeStore(storeData))(
    (actionAttempt) => dispatched = actionAttempt
  );

  dispatch(action);
  return dispatched;
};

describe('check-name middleware', () => {
  it('should dispatch if store is empty', () => {
    const action = {
      type: 'UPDATE_NAME',
      name: 'test'
    };

    expect(dispatchWithStoreOf({}, action)).toEqual(action);
  });

  // [wip]
  it('should not dispatch if store already has type', () => {
    const action = {
      type: 'UPDATE_NAME',
      name: 'test'
    };

    expect(
      dispatchWithStoreOf({
        UPDATE_NAME: 'test'
      }, action)
    ).toEqual(action);
  });
});
