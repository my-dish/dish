// @flow

export type Users = {
  name: string;
};

// add states
export type AllStates = {
  users: Users;
};

export type UsersAction = {
  type: 'UPDATE_NAME';
  name: string;
};
