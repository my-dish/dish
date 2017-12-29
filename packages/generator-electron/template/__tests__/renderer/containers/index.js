import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import Root from '../../../src/renderer/containers';
import Routes from '../../../src/renderer/Routes';

describe('Root container', () => {
  it('should render Routes component', () => {
    const store = configureStore()({});
    const wrapper = mount(
      <Provider store={store}>
        <Root />
      </Provider>
    );

    expect(wrapper.contains(<Routes />)).toBeTruthy();
  });
});
