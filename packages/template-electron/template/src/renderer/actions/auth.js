// @flow

import type {
  Login,
  Logout
} from '../types/actions/auth';

export const login = (mail: string): Login => ({
  type: 'LOGIN',
  mail
});

export const logout = (): Logout => ({
  type: 'LOGOUT'
});
