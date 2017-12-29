// @flow

import axios from 'axios';
import { takeEvery, effects } from 'redux-saga';

import type { Effect } from 'redux-saga';
import type { UsersAction } from '../types';


const {
  put,
  fork,
  cancel
} = effects;

/**
 * fetch from somewhere
 */
function fetchName(): Promise<Object[]> { // eslint-disable-line no-unused-vars
  return axios.get('')
    .then((res) => res)
    .catch((err) => err);
}

/**
 * update my name
 */
function *updateName(action: UsersAction): Generator<Effect, void, *> {
  try {
    const name = action.name; // eslint-disable-line no-unused-vars
    // yield call(fetchName);
    // yield put({
    //   type: 'UPDATE_NAME',
    //   name: '???'
    // });
  } catch (e) {
    yield put({
      type: 'UPDATE_NAME',
      name: 'error'
    });
  }
}

/**
 * flow of update the name
 */
function *updateNameFlow(action: UsersAction): Generator<Effect, void, *> {
  const task = yield fork(updateName, action);

  yield cancel(task);
}

/**
 * Root for user
 */
export default function *user(): Generator<Effect, void, *> {
  yield* takeEvery('UPDATE_NAME', updateNameFlow);
}
