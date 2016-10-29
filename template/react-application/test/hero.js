import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import Hero from '../src/components/Hero';

test('should return Hello:)', (t) => {
  const hero = shallow(<Hero />);
  const text = hero.find('h1').text();

  t.is(text, 'Hello:)');
});
