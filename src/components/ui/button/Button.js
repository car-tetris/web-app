import React, { Component, PropTypes } from 'react'
import { Button as ButtonToolbox } from 'react-toolbox';

import styles from './button.css';

/**
 * Select a car container.
 */
class Button extends Component {

  static propTypes = {
    primary: PropTypes.bool,
    accent: PropTypes.bool
  };

  static defaultProps = {
    primary: true
  };

  constructor() {
    super();
  }

  componentWillMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    const {children, primary, accent, ...props} = this.props;

    return(
      <ButtonToolbox
        className={`
          ${primary ? styles.primary : ''}
          ${accent ? styles.accent : ''}
        `}
        {...props}
      >
        {children}
      </ButtonToolbox>
    )
  }
}

export default Button;
