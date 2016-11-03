// @flow

import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import * as definedMiddlewares from '../middlewares';

const commonMiddlewares: Array<any> = Object.values(definedMiddlewares);

// want to use middlewares in production
const middlewares: Array<Function> = [
  ...commonMiddlewares
];

const enhancer = compose(applyMiddleware(...middlewares));

const configureStore = (initialState?: Object) => (
  createStore(rootReducer, initialState, enhancer)
);

export default configureStore;
