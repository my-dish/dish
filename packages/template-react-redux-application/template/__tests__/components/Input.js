import React from 'react';
import { shallow } from 'enzyme';
import Input from '../../src/components/Input';

describe('Input component', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      updateName: jest.fn()
    };

    wrapper = shallow(<Input {...props} />);
  });

  it('should render self and subcomponents', () => {
    const inputProps = wrapper.find('input').props();

    expect(inputProps.type).toEqual('text');
    expect(inputProps.placeholder).toEqual('Input your name');
  });

  it('should call updateName', () => {
    const inputProps = wrapper.find('input').props();

    inputProps.onChange({
      target: {
        value: 'testtest'
      }
    });

    expect(props.updateName.mock.calls.length).toEqual(1);
    expect(props.updateName.mock.calls[0][0]).toEqual('testtest');
  });
});
