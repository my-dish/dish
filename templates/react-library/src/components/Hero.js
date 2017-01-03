// @flow

import React from 'react';
import classnames from 'classnames';

type Props = {
  style?: {
    color?: string;
  },
  className?: string;
};

const Hero = (props: Props) => (
  <div className={classnames(props.className, 'container')}>
    <h1 style={Object.assign({}, defaultStyle.label, props.style)}>
      Hello:)
    </h1>
  </div>
);

const defaultStyle = {
  label: {
    color: '#3498db'
  }
};

export default Hero;
