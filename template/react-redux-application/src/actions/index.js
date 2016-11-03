// @flow

import * as types from '../constants/ActionTypes';

export const updateName = (name: string): Object => {
  return {
    type: types.UPDATE_NAME,
    name
  };
};
