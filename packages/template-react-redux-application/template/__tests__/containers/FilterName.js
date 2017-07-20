import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import FilterName from '../../src/containers/FilterName';
import Input from '../../src/components/Input';

const createFakeStore = (state) => ({
  default  : () => {},
  dispatch : () => {},
  getState : () => ({ ...state }),
  subscribe: () => {}
});

describe('FilterName component', () => {
  let wrapper;

  beforeEach(() => {
    const store = createFakeStore({});

    wrapper = mount(
      <Provider store={store}>
        <FilterName />
      </Provider>
    );
  });

  it('should render self and check props from container component', () => {
    expect(wrapper.find(FilterName).length).toEqual(1);

    const container = wrapper.find(FilterName);
    expect(container.find(Input).length).toEqual(1);

    const input = container.find(Input);
    expect(Reflect.has(input.props(), 'updateName')).toEqual(true);
  });

  it('should perform updateName', () => {
    const updateNameStub = jest.fn();

    const input = mount(<Input updateName={updateNameStub} />);

    input.find('input').simulate('change', {
      target: {
        value: 'test'
      }
    });

    expect(updateNameStub.mock.calls[0][0]).toEqual('test');
    expect(updateNameStub.mock.calls.length).toEqual(1);
  });
});
