import * as actions from '../../../src/renderer/actions/auth';

describe('actions/auth', () => {
  it('should create login', () => {
    const mail = 'a@b.com';

    const expectedAction = {
      type: 'LOGIN',
      mail
    };

    expect(actions.login(mail)).toEqual(expectedAction);
  });

  it('should create logout', () => {
    const expectedAction = {
      type: 'LOGOUT'
    };

    expect(actions.logout()).toEqual(expectedAction);
  });
});
