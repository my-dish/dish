import React from 'react';

import styles from './hero.style.css';

class Hero extends React.Component {
  render() {
    return (
      <h1 className={styles.title}>
        Hello:)
      </h1>
    );
  }
}

export default Hero;
