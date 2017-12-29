// @flow

import { createStore, applyMiddleware, compose } from 'redux';
import createSaga from 'redux-saga';
import { createMemoryHistory as createHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import mySaga from '../sagas';

import type { State } from '../types/states';

export const history = createHistory();

const saga = createSaga();

const createEnhancer = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        actionsBlacklist: []
      }) :
      compose;

  const appliedMiddlewares = applyMiddleware(
    saga,
    routerMiddleware(history)
  );

  return composeEnhancers(appliedMiddlewares);
};

const configureStore = (initialState?: State) => {
  const enhancer = createEnhancer();
  const store = createStore(rootReducer, initialState, enhancer);

  saga.run(mySaga);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
