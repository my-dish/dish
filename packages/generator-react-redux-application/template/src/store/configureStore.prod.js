// @flow

import { createStore, applyMiddleware, compose } from 'redux';
import createSaga from 'redux-saga';
import rootReducer from '../reducers';
import * as definedMiddlewares from '../middlewares';
import mySaga from '../sagas';

import type { AllStates } from '../types';

const saga = createSaga();

const commonMiddlewares: Array<any> = Object.values(definedMiddlewares);

// want to use middlewares in production
const middlewares: Array<Function> = [
  saga,
  ...commonMiddlewares
];

const enhancer = compose(applyMiddleware(...middlewares));

const configureStore = (initialState?: AllStates) => {
  const store = createStore(rootReducer, initialState, enhancer);

  saga.run(mySaga);

  return store;
};

export default configureStore;
