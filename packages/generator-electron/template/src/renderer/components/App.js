// @flow

import React from 'react';
import styles from '../styles/app.css';

type Props = {
  children?: React.Component<*>;
};

const App = (props: Props) => (
  <div className={styles.container}>
    {
      props.children
    }
  </div>
);

export default App;
