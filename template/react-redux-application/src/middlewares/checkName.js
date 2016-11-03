// @flow

import * as types from '../constants/ActionTypes';

const checkName: Function = (store: Object) => (next: Function) => (action: Object) => {
  if (action.type === types.UPDATE_NAME) {
    store.getState();
  }
  return next(action);
};

export default checkName;
