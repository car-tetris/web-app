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
        {value <= 100 &&
          <span>
            <div>{value == 100 ? 'Dein Auto ist voll' : value + '% beladen...'}</div>
            <div className={styles.base + ' ' + styles.full} style={{width: '240px', height: (value / 4 * 3) + 'px', zIndex: '2', margin: '0 auto'}}/>
            <div className={styles.base + ' ' + styles.empty} style={{width: '240px', height: '75px', zIndex: '1', margin: '0 auto'}}/>
          </span>
        }
        {value > 100 &&
          <span>
            <div>Das Auto ist überladen</div>
            <div className={styles.base + ' ' + styles.loaded} style={{width: '240px', height: '75px', zIndex: '2', margin: '0 auto'}}/>
          </span>
        }
      </div>
    )
  }
}

export default LoadedCar;
