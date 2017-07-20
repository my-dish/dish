import * as actions from '../../src/actions';

describe('actions', () => {
  it('should create updateName', () => {
    const name = 'test';
    const expectedAction = {
      type: 'UPDATE_NAME',
      name
    };

    expect(actions.updateName(name)).toEqual(expectedAction);
  });
});
