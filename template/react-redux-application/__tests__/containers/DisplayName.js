import React from 'react';
import {Provider} from 'react-redux';
import {mount} from 'enzyme';
import DisplayName from '../../src/containers/DisplayName';
import Label from '../../src/components/Label';

const storeFake = (state) => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({...state})
});

describe('DisplayName component', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    const store = storeFake({
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
