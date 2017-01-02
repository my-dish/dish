// @flow

import type { Middleware } from 'redux';
import type { AllStates, UsersAction } from '../types';

const checkName: Middleware<AllStates, UsersAction> = (store) => (next) => (action) => {
  if (action.type === 'UPDATE_NAME') {
    store.getState();
  }
  return next(action);
};

export default checkName;
