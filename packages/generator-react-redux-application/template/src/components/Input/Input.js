// @flow

import React from 'react';
import styles from './input.style.css';

type Props = {
  updateName: () => void;
};

const Input = (props: Props) => (
  <div className={styles.container}>
    <input
      type="text"
      className={styles.input}
      placeholder="Input your name"
      onChange={(e) => props.updateName(e.target.value)}
    />
  </div>
);

export default Input;
