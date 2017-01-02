// @flow

import type { Users, UsersAction } from '../types';

const initialState = {
  name: ':)'
};

const reducer = (state: Users = initialState, action: UsersAction) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return Object.assign({}, state, {
        name: action.name
      });
    default:
      (action: empty);
      return state;
  }
};

export default reducer;
