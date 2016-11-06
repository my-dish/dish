import React from 'react';
import {Provider} from 'react-redux';
import {mount} from 'enzyme';
import Root from '../../src/containers';
import FilterName from '../../src/containers/FilterName';
import DisplayName from '../../src/containers/DisplayName';

const createFakeStore = (state) => ({
  default: () => {},
  dispatch: () => {},
  getState: () => ({...state}),
  subscribe: () => {}
});

describe('Root container', () => {
  let wrapper;

	beforeEach(() => {
		const store = createFakeStore({});

		wrapper = mount(
			<Provider store={store}>
				<Root />
			</Provider>
		);
	});

  it('should render self', () => {
    expect(wrapper.contains(<FilterName />)).toEqual(true);
    expect(wrapper.contains(<DisplayName />)).toEqual(true);
	});
});
