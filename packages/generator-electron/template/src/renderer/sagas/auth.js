// @flow

import { takeEvery, effects } from 'redux-saga';
import { getMail } from './selectors';

import type { Effect } from 'redux-saga';
import type { Login } from '../types/actions/auth';

const {
  put,
  select
} = effects;

/**
 * login
 * @param {Login} action
 */
function *login(action: Login): Generator<Effect, void, *> {
  try {
    const mail = yield select(getMail);

    if (action.mail !== mail) {
      yield put({
        type   : 'LOGIN_SUCCESS',
        payload: {
          mail: action.mail
        }
      });
    }
    else {
      throw {
        code: 'ERROR_LOGIN'
      };
    }
  } catch (e) {
    yield put({
      type : 'ERROR',
      error: e
    });
  }
}

/**
 * logout
 */
function *logout(): Generator<Effect, void, *> {
  try {
    const mail = yield select(getMail);

    if (mail !== '') {
      yield put({ type: 'LOGOUT_SUCCESS' });
    }
    else {
      throw {
        code: 'ERROR_LOGOUT'
      };
    }
  } catch (e) {
    yield put({
      type : 'ERROR',
      error: e
    });
  }
}

/**
 * Root for auth
 */
export default function *authProcess(): Generator<Effect, void, *> {
  yield takeEvery('LOGIN', login);
  yield takeEvery('LOGOUT', logout);
}
