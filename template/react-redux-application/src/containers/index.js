import React from 'react';
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';
import App from '../components/App';

const root = () => (
  <Provider store={configureStore()}>
    <App />
  </Provider>
);

export default root;
