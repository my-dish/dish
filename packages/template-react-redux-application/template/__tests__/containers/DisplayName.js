import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import DisplayName from '../../src/containers/DisplayName';
import Label from '../../src/components/Label';

const createFakeStore = (state) => ({
  default  : () => {},
  dispatch : () => {},
  getState : () => ({ ...state }),
  subscribe: () => {}
});

describe('DisplayName component', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    const store = createFakeStore({
      users: {
        name: 'testtest'
      }
    });

    wrapper = mount(
      <Provider store={store}>
        <DisplayName />
      </Provider>
    );
  });

  it('should render self and check props from container component', () => {
    expect(wrapper.find(DisplayName).length).toEqual(1);

    const container = wrapper.find(DisplayName);
    expect(container.find(Label).length).toEqual(1);

    const label = container.find(Label);
    expect(label.props()).toEqual({
      name: 'testtest'
    });
  });
});
