// @flow

import React from 'react';
import styles from './input.style.css';

class Input extends React.Component {
  static propTypes = {
    updateName: React.PropTypes.func.isRequired
  };

  render() {
    const {
      updateName
    } = this.props;

    return (
      <div className={styles.container}>
        <input
          type="text"
          className={styles.input}
          placeholder="Input your name"
          onChange={(e) => updateName(e.target.value)}
        />
      </div>
    );
  }
}

export default Input;
