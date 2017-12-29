import React from 'react';
import { shallow } from 'enzyme';
import Label from '../../src/components/Label';

describe('Label component', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      name: 'test'
    };

    wrapper = shallow(<Label {...props} />);
  });

  it('should render self and subcomponents', () => {
    const labelProps = wrapper.find('p').props();

    expect(labelProps.className).toEqual('title');
    expect(labelProps.children).toEqual(['Hello ', 'test', ' !']);
  });
});
