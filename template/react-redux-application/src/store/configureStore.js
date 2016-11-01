import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import * as definedMiddlewares from '../middlewares';

const exceptedActionFromReduxLogger = [
];

const devMiddlewares = [
  createLogger({
    predicate: (getState, action) => !exceptedActionFromReduxLogger.includes(action.type)
  })
];

const commonMiddlewares = [
  ...Object.values(definedMiddlewares)
];

export default (initialState) => {
  const middlewares = [
    ...commonMiddlewares,
    ...(process.env.NODE_ENV === 'production' ? [] : devMiddlewares)
  ];

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  );
};
