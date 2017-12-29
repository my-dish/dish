import { expectSaga } from 'redux-saga-test-plan';
import auth from '../../../src/renderer/sagas/auth';

describe('auth saga', () => {
  const storeState = {
    auth: {
      mail: 'a@b.com'
    }
  };

  it('should take on the LOGIN action', () => {
    return expectSaga(auth)
      .withState(storeState)
      .put({
        type   : 'LOGIN_SUCCESS',
        payload: {
          mail: '--a@b.com'
        }
      })
      .dispatch({
        type: 'LOGIN',
        mail: '--a@b.com'
      })
      .run();
  });


  it('should fail on the LOGIN action', () => {
    return expectSaga(auth)
      .withState(storeState)
      .put({
        type : 'ERROR',
        error: {
          code: 'ERROR_LOGIN'
        }
      })
      .dispatch({
        type: 'LOGIN',
        mail: 'a@b.com'
      })
      .run();
  });

  it('should take on the LOGOUT action', () => {
    return expectSaga(auth)
      .withState(storeState)
      .put({ type: 'LOGOUT_SUCCESS' })
      .dispatch({ type: 'LOGOUT' })
      .run();
  });

  it('should fail on the LOGOUT action', () => {
    return expectSaga(auth)
      .withState({
        auth: {
          mail: ''
        }
      })
      .put({
        type : 'ERROR',
        error: {
          code: 'ERROR_LOGOUT'
        }
      })
      .dispatch({ type: 'LOGOUT' })
      .run();
  });
});
