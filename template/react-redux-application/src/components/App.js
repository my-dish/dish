import React from 'react';
import FilterName from '../containers/FilterName';
import DisplayName from '../containers/DisplayName';
import styles from '../styles/app';

const App = () => (
  <div className={styles.container}>
    <DisplayName />
    <FilterName />
  </div>
);

export default App;
