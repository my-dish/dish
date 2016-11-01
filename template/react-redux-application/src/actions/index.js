import * as ActionTypes from '../constants/ActionTypes';

export const updateName = (name) => {
  return {
    type: ActionTypes.UPDATE_NAME,
    name
  };
};
