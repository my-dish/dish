import React from 'react';
import { shallow } from 'enzyme';
import Main from '../../../../src/renderer/components/tempaltes/Main';

describe('Main component', () => {
  const createDOM = (props = {}) => shallow(<Main {...props} />);

  it('should render self and subcomponents', () => {
    const wrapper = createDOM();

    expect(wrapper).toMatchSnapshot();
  });

  it('should render left, right and children', () => {
    const wrapper = createDOM({
      left    : <h1>left</h1>,
      right   : <h1>right</h1>,
      children: <div>children</div>
    });

    expect(wrapper).toMatchSnapshot();
  });
});
