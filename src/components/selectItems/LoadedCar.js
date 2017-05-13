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


    let load = (value * 100).toFixed();
    if(isNaN(load)) {
      load = 0;
    }

    return(
      <div style={{position: 'relative', height: '120px', textAlign: 'center', width: '100%'}}>
        {load <= 100 &&
          <span>
            <div>{load == 100 ? 'Dein Auto ist voll' : load + '% beladen...'}</div>
            <div className={styles.base + ' ' + styles.full} style={{width: '240px', height: (load / 4 * 3) + 'px', zIndex: '2', margin: '0 auto'}}/>
            <div className={styles.base + ' ' + styles.empty} style={{width: '240px', height: '75px', zIndex: '1', margin: '0 auto'}}/>
          </span>
        }
        {load > 100 &&
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
