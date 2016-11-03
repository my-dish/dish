// @flow

import type {Users} from '../types';

import * as types from '../constants/ActionTypes';

const initialState: Object = {
  name: ':)'
};

const reducer = (state: Users = initialState, action: Object): Users => {
  switch (action.type) {
    case types.UPDATE_NAME:
      return Object.assign({}, state, {
        name: action.name
      });
    default:
      return state;
  }
};

export default reducer;
