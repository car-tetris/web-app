import React, { Component, PropTypes } from 'react';
import { Input as InputToolbox } from 'react-toolbox';

import styles from './input.css';

/**
 * Input field.
 */
class Input extends Component {

  static propTypes = {
    primary: PropTypes.bool
  };

  static defaultProps = {
    primary: true
  };

  constructor() {
    super();
  }

  render() {
    const {children, primary, ...props} = this.props;

    return(
      <InputToolbox
        className={`
          ${primary ? styles.primary : ''}
        `}
        {...props}
      />
    )
  }
}

export default Input;
