import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import Login from '../../../src/renderer/containers/Login';
import LoginComponent from '../../../src/renderer/components/pages/Login';
import rootReducer from '../../../src/renderer/reducers';

describe('Login container', () => {
  let wrapper, store;

  beforeEach(() => {
    const state = createStore(rootReducer).getState();
    store = configureStore()(state); // or add mysaga?

    wrapper = mount(
      <Provider store={store}>
        <Login />
      </Provider>
    );
  });

  it('should render Login component', () => {
    expect(wrapper.find(LoginComponent).length).toBeTruthy();
  });

  it('should send props to Login component', () => {
    const props = wrapper.find(LoginComponent).props();

    expect(props.mail).toEqual('');
    expect(typeof props.login).toEqual('function');

    store.subscribe(() => expect(true).toBeTruthy());

    props.login('aaaa====');
  });
});
