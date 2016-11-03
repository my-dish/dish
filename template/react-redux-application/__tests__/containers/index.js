import React from 'react';
import {Provider} from 'react-redux';
import {shallow} from 'enzyme';
import Root from '../../src/containers';
import DisplayName from '../../src/containers/DisplayName';

const createFakeState = (fakeData) => ({
		default() {},
		subscribe() {},
		dispatch() {},
		getState() {
			return fakeData;
		}
});

xit('Root container', () => {
  let wrapper;

	beforeEach(() => {
		const store = createFakeState({});

		wrapper = shallow(
			<Provider store={store}>
				<Root />
			</Provider>
		);
	});

  it('should render self', () => {
    // console.log(wrapper.find('Root'))
    // console.log(wrapper.contains(<DisplayName />))
	});
});
