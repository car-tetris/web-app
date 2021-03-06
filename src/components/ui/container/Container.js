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
    width: PropTypes.oneOf(['full', 'lg', 'md', 'sm']),
    className: PropTypes.string,
    style: PropTypes.object
  };

  render() {
    const { className, width, style, children, ...props } = this.props;

    return(
      <div
        className={`
          ${styles.basic}
          ${styles['width-' + width]}
          ${className ? className : ''}
        `}
        style={style}
        {...props}
      >
        {children}
      </div>
    )
  }
}

export default Container;
