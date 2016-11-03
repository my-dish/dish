// @flow

import React from 'react';
import styles from './label.style.css';

class Label extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired
  };

  render() {
    const {
      name
    } = this.props;

    return (
      <p className={styles.title}>
        Hello {name} !
      </p>
    );
  }
}

export default Label;
