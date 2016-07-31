import React from 'react';
import ReactDOM from 'react-dom';

import Hero from './components/Hero';

class Root extends React.Component {
  render() {
    return (
      <div>
        <Hero />
      </div>
    );
  }
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
