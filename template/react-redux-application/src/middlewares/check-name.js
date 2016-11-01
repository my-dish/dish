import * as Actions from '../actions';
import * as ActionTypes from '../constants/ActionTypes';

const checkName = (store) => (next) => (action) => {
  if (action.type === ActionTypes.UPDATE_NAME) {
  }
  return next(action);
};

export default checkName;
