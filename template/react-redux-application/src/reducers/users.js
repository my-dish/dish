import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
  name: ':)'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_NAME:
      return Object.assign({}, state, {
        name: action.name
      });
    default:
      return state;
  }
};
