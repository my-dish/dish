import reducer from '../../../src/renderer/reducers/auth';

describe('reducer/auth', () => {
  const initialState = {
    mail: ''
  };

  it('should return the initial state', () => {
    const expectedResult = initialState;

    expect(reducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle LOGIN', () => {
    expect(reducer(undefined, { type: 'LOGIN' })).toEqual(initialState);
  });

  it('should handle LOGOUT', () => {
    expect(reducer(undefined, { type: 'LOGOUT' })).toEqual(initialState);
  });

  it('should handle LOGIN_SUCCESS', () => {
    const expectedResult = Object.assign({}, initialState, {
      mail: 'a@b.com'
    });

    expect(reducer(undefined, {
      type   : 'LOGIN_SUCCESS',
      payload: {
        mail: 'a@b.com'
      }
    })).toEqual(expectedResult);
  });

  it('should handle LOGOUT_SUCCESS', () => {
    const expectedResult = Object.assign({}, initialState, {
      mail: ''
    });

    expect(reducer(undefined, { type: 'LOGOUT_SUCCESS' })).toEqual(expectedResult);
  });
});
