import { expectSaga } from 'redux-saga-test-plan';
import error from '../../../src/renderer/sagas/error';

describe('error saga', () => {
  it('should take on the ERROR action and return ERROR_LOGIN', () => {
    return expectSaga(error)
      .put({ type: 'ERROR_LOGIN' })
      .dispatch({
        type : 'ERROR',
        error: {
          code: 'ERROR_LOGIN'
        }
      })
      .run();
  });

  it('should take on the ERROR action and return ERROR_LOGOUT', () => {
    return expectSaga(error)
      .put({ type: 'ERROR_LOGOUT' })
      .dispatch({
        type : 'ERROR',
        error: {
          code: 'ERROR_LOGOUT'
        }
      })
      .run();
  });
});
