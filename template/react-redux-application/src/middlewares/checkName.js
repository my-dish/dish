// @flow

const checkName: Function = (store: Object) => (next: Function) => (action: Object) => {
  if (action.type === 'UPDATE_NAME') {
    store.getState();
  }
  return next(action);
};

export default checkName;
