import reducer from '../../src/reducers/users';

describe('users reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
      name: ':)'
    });
  });

  it('should handle UPDATE_NAME', () => {
    expect(
      reducer([], {
        type: 'UPDATE_NAME',
        name: 'testtest'
      })
    ).toEqual({
      name: 'testtest'
    });
  });
});
