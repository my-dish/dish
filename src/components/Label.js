import React from 'react';

import styles from '../../styles/label.css';

class Label extends React.Component {
  render() {
    return (
      <p className={styles.label}>
        Hello:)
      </p>
    );
  }
}

export default Label;
