// @flow

import type { Effect } from 'redux-saga';

import { fork } from 'redux-saga/effects';
import user from './user';

/**
 *
 */
function *rootSaga(): Generator<Effect, void, *> {
  yield [
    fork(user)
  ];
}

export default rootSaga;
