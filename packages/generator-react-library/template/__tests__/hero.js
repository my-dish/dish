import React from 'react';
import { shallow } from 'enzyme';
import Hero from '../src';

test('should return Hello:)', () => {
  const hero  = shallow(<Hero />);
  const text  = hero.find('h1').text();
  const props = hero.props();

  expect(hero.is('div')).toEqual(true);
  expect(text).toEqual('Hello:)');
  expect(props.className).toEqual('container');
});
