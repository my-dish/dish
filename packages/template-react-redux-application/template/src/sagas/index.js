// @flow

import type { Effect } from 'redux-saga';

import { effects } from 'redux-saga';
import user from './user';

/**
 * Root for saga
 */
function *rootSaga(): Generator<Effect, void, *> {
  yield [
    effects.fork(user)
  ];
}

export default rootSaga;
