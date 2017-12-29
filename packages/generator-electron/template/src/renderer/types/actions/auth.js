// @flow

export type Login = {
  type: 'LOGIN';
  mail: string;
};

export type Logout = {
  type: 'LOGOUT';
};

export type Auth =
  Login |
  Logout;
