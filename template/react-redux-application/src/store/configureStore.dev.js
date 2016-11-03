// @flow

import {createStore, applyMiddleware, compose} from 'redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import * as definedMiddlewares from '../middlewares';

// [WIP] devtool

// ignore action logger
const exceptedActionsFromReduxLogger: Array<string> = [];

const commonMiddlewares: Array<any> = Object.values(definedMiddlewares);

// want to use middlewares in development
const middlewares: Array<Function> = [
  createLogger({
    predicate: (getState, action) => !exceptedActionsFromReduxLogger.includes(action.type)
  }),
  ...commonMiddlewares
];

const enhancer = compose(applyMiddleware(...middlewares));

const configureStore = (initialState?: Object) => (
  createStore(rootReducer, initialState, enhancer)
);

export default configureStore;
