import React, { Component, PropTypes } from 'react'
import { Input } from '../ui';
import { IconButton } from 'react-toolbox';

import styles from './itemSearch.css';

/**
* Item search.
*/
class ItemSearch extends Component {

  constructor() {
    super();
  }

  render() {

    return(
    <div style={{position: 'relative'}}>

      <Input type="text" floating={false} label="Produktname" />
      <IconButton icon="search" style={{position: 'absolute', right: '0', top: '20px', color: 'grey'}} />
      <IconButton icon="camera" style={{position: 'absolute', right: '30px', top: '20px', color: 'grey'}} />

    </div>
    )
  }
}

export default ItemSearch;
