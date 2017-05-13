import React, { Component, PropTypes } from 'react'
import { Input, Button } from '../ui';

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
    <div>

      <Input type="text" floating={false} label="Produktname" />
      <Button icon="camera" />
      <Button icon="camera" />

    </div>
    )
  }
}

export default ItemSearch;
