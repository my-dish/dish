// @flow

import type { Auth as State } from '../types/states/auth';
import type { Auth as Action } from '../types/actions/auth';

const initialState = {
  mail: ''
};

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return Object.assign({}, state, {
        mail: action.payload.mail
      });
    case 'LOGOUT_SUCCESS':
      return Object.assign({}, state, {
        mail: ''
      });
    case 'LOGIN':
    case 'LOGOUT':
      return state;
    default:
      (action: empty);
      return state;
  }
};

export default reducer;
