import * as actions from '../../src/actions';
import * as ActionTypes from '../../src/constants/ActionTypes';

describe('actions', () => {
  it('should create updateName', () => {
    const name = 'test';
    const expectedAction = {
      type: ActionTypes.UPDATE_NAME,
      name
    };

    expect(actions.updateName(name)).toEqual(expectedAction);
  });
})
