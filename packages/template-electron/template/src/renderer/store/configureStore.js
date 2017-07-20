// @flow

let configureStore, history;

if (process.env.NODE_ENV !== 'production') {
  const dev = require('./configureStore.dev');

  configureStore = dev.default;
  history = dev.history;
}
else {
  const prod = require('./configureStore.prod');

  configureStore = prod.default;
  history = prod.history;
}

export { history };
export default configureStore;
