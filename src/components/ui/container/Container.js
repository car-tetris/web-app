import React, { Component, PropTypes } from 'react'

import styles from './container.css';

/**
 * A container or wrapper for content.
 */
class Container extends Component {

  static defaultProps = {
    width: 'lg'
  };

  static PropTypes = {
    width: PropTypes.oneOf(['full', 'fixed', 'lg', 'md', 'sm']),
    className: PropTypes.string,
    style: PropTypes.object
  };

  render() {
    const { className, width, style, children } = this.props;

    return(
      <div
        className={`
          ${styles.basic}
          ${styles['width-' + width]}
          ${className ? className : ''}
        `}
        style={style}
      >
        {children}
      </div>
    )
  }
}

export default Container;
