import React from 'react';
import { shallow } from 'enzyme';
import Hero from '../src/components/Hero';

test('should return Hello:)', () => {
  const hero = shallow(<Hero />);
  const text = hero.find('h1').text();

  expect(text).toEqual('Hello:)');
});
