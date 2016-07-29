import React from 'react';
import ReactDOM from 'react-dom';

import Label from './components/Label';

class Root extends React.Component {
  render() {
    return (
      <div>
        <Label />
      </div>
    );
  }
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
