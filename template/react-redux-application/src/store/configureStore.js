// @flow

import configureStoreDev from './configureStore.dev';
import configureStoreProd from './configureStore.prod';

const configureStore = process.env.NODE_ENV !== 'production' ?
  configureStoreDev :
  configureStoreProd;

export default configureStore;
