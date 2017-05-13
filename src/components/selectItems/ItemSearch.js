import React, { Component, PropTypes } from 'react'
import { Input } from '../ui';
import { IconButton } from 'react-toolbox';

import styles from './itemSearch.css';

/**
* Item search.
*/
class ItemSearch extends Component {

  static propTypes = {
    onChange: PropTypes.func.isRequired,
  }

  state = {
    searchValue: ''
  }

  constructor() {
    super();
  }

  onChangeSearch(value) {
    this.setState({ searchValue: value });
    this.props.onChange(value);
  }

  render() {
    const { searchValue } = this.state;

    return(
    <div style={{position: 'relative'}}>

      <Input
        type="text"
        label="Produktname"
        onChange={(value) => this.onChangeSearch(value)} value={searchValue}
        floating={false}
      />

      <IconButton
        icon={searchValue.length > 0 ? 'close' : 'search'}
        onClick={() => this.setState({ searchValue: '' }) }
        style={{position: 'absolute', right: '35px', top: '20px', color: 'grey'}}
      />

      <IconButton
        icon="camera"
        style={{position: 'absolute', right: '0', top: '20px', color: 'grey'}}
      />

    </div>
    )
  }
}

export default ItemSearch;
