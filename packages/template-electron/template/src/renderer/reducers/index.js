// @flow

import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import auth from './auth';

const reducer = combineReducers({
  auth,
  router
});

export default reducer;
