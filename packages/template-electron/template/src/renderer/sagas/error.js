// @flow

import { takeEvery, effects } from 'redux-saga';

import type { Effect } from 'redux-saga';
import type { Error } from '../types/actions/error';

const { put } = effects;

/**
 * route Error
 */
function *routeError(action: Error): Generator<Effect, void, *> {
  const code = action.error.code;

  switch (code) {
    case 'ERROR_LOGIN':
      yield put({ type: 'ERROR_LOGIN' });
      break;
    case 'ERROR_LOGOUT':
      yield put({ type: 'ERROR_LOGOUT' });
      break;
  }
}

/**
 * login error
 */
function errorLogin() {
  alert('invalid mail address');
}

/**
 * logout error
 */
function errorLogout() {
  alert('cannot logout');
}

/**
 * Error for error
 */
export default function *errorProcess(): Generator<Effect, void, *> {
  yield takeEvery('ERROR', routeError);
  yield takeEvery('ERROR_LOGIN', errorLogin);
  yield takeEvery('ERROR_LOGOUT', errorLogout);
}
