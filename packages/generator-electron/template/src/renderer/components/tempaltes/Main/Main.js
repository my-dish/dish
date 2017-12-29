// @flow

import React from 'react';
import styles from './style.css';

type Props = {
  left: React.Component<*>;
  right: React.Component<*>;
  children: React.Component<*>;
};

const Main = (props: Props) => (
  <div className={styles.container}>
    <div className={styles.left}>{props.left}</div>
    {
      props.children
    }
    <div className={styles.right}>{props.right}</div>
  </div>
);

export default Main;
