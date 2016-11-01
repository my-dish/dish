import React from 'react';
import styles from './input.style';

class Input extends React.Component {
  static propTypes = {
    updateName: React.PropTypes.func.isRequired
  };

  constructor() {
    super();

    this.state = {
      disabled: false
    }
  }

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
