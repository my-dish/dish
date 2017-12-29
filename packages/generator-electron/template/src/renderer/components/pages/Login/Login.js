// @flow

import React from 'react';
import Main from '../../tempaltes/Main';
import styles from './style.css';

type Props = {
  mail: string;
  login: (string) => {};
};

// Please create atoms, molecules, organisms.

const Right = (props) => (
  <div className={styles.container}>
    <button
      onClick={() => props.login(`${ Math.random() * 100}`)}
    >
      login
    </button>
  </div>
);

const Login = (props: Props) => (
  <Main
    right={<Right login={props.login} />}
  >
    {
      props.mail
    }
  </Main>
);

export default Login;
