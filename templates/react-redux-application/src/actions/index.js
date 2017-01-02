// @flow

import type { UsersAction } from '../types';

export const updateName = (name: string): UsersAction => {
  return {
    type: 'UPDATE_NAME',
    name
  };
};
