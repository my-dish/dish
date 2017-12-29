// @flow

import { effects } from 'redux-saga';
import auth from './auth';
import error from './error';

import type { Effect } from 'redux-saga';

/**
 * Root for saga
 */
function *rootSaga(): Generator<Effect, void, *> {
  yield [
    effects.fork(auth),
    effects.fork(error)
  ];
}

export default rootSaga;
