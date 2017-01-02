import user from '../../src/sagas/user';

describe('user saga', () => {
  it('should return ActionType', () => {
    const updateNameFlow = user();

    expect(updateNameFlow.next().value.TAKE).toEqual({
      pattern: 'UPDATE_NAME'
    });
  });
});
