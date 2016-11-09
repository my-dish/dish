// @flow

import {createStore, applyMiddleware, compose} from 'redux';
import createLogger from 'redux-logger';
import createSaga from 'redux-saga';
import rootReducer from '../reducers';
import * as definedMiddlewares from '../middlewares';
import mySaga from '../sagas';

// [WIP] devtool

const saga = createSaga();

// ignore action logger
const exceptedActionsFromReduxLogger: Array<string> = [];

const commonMiddlewares: Array<any> = Object.values(definedMiddlewares);

// want to use middlewares in development
const middlewares: Array<Function> = [
  saga,
  createLogger({
    predicate: (getState, action) => !exceptedActionsFromReduxLogger.includes(action.type)
  }),
  ...commonMiddlewares
];

const enhancer = compose(applyMiddleware(...middlewares));

const configureStore = (initialState?: Object) => {
  const store = createStore(rootReducer, initialState, enhancer);

  saga.run(mySaga);
  return store;
};

export default configureStore;
