// @flow

import React from 'react';
import { Switch, Route } from 'react-router';
import App from './components/App';
import Login from './containers/Login';

const Router = () => (
  <App>
    <Switch>
      <Route path="/none"><div>hello!</div></Route> {/* root */}
      <Route component={Login} />
    </Switch>
  </App>
);

export default Router;
