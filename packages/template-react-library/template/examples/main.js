import React from 'react';
import ReactDOM from 'react-dom';
import Hero from '../src';

const root = () => (
  <div
    style={{
      textAlign: 'center',
      marginTop: 150
    }}
  >
    <Hero />
  </div>
);

ReactDOM.render(
  root(),
  document.getElementById('root')
);
