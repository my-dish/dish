import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import App from './containers';

const rootEl = document.getElementById('root');

ReactDOM.render((
  <AppContainer>
    <App />
  </AppContainer>),
  rootEl
);

if (module.hot) {
  module.hot.accept('./containers', () => {
    const NextApp = require('./containers').default;

    ReactDOM.render((
      <AppContainer>
         <NextApp />
      </AppContainer>),
      rootEl
    );
  });
}
