// @flow

import React from 'react';
import styles from './label.style.css';

type Props = {
  name: string;
};

const Label = (props: Props) => (
  <p className={styles.title}>
    Hello {props.name} !
  </p>
);

export default Label;
