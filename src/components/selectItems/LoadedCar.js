import React, { Component, PropTypes } from 'react'

import styles from './loadedCar.css';

/**
 * loaded car
 */
class LoadedCar extends Component {

  static propTypes = {
    value: PropTypes.number
  };

  constructor() {
    super();
  }

  render() {

    const { value } = this.props;

    return(
      <div style={{position: 'relative', height: '120px', textAlign: 'center', width: '100%'}}>
        <div>{value}% beladen...</div>
        <div className={styles.base + ' ' + styles.fill} style={{width: '260px', height: value + 'px', zIndex: '2', margin: '0 auto'}}/>
        <div className={styles.base + ' ' + styles.empty} style={{width: '260px', height: '100px', zIndex: '1', margin: '0 auto'}}/>
      </div>
    )
  }
}

export default LoadedCar;
