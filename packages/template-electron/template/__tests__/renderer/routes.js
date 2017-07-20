import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import configureStore from 'redux-mock-store';
import { render } from 'enzyme';
import Routes from '../../src/renderer/Routes';
import rootReducer from '../../src/renderer/reducers';

describe('routes', () => {
  const createDOM = (path = '/') => {
    const state = createStore(rootReducer).getState();
    const store = configureStore()(state);

    return render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[path]}>
          <Routes />
        </MemoryRouter>
      </Provider>
    );
  };

  it('should render the login page', () => {
    expect(createDOM('/login')).toMatchSnapshot();
  });

  it('should render the none page', () => {
    expect(createDOM('/none')).toMatchSnapshot();
  });
});
