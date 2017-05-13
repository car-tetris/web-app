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

      <Input type="text" onChange={(value) => this.onChangeSearch(value)} value={searchValue} floating={false} label="Produktname" />
      <IconButton icon="search" style={{position: 'absolute', right: '0', top: '20px', color: 'grey'}} />
      <IconButton icon="camera" style={{position: 'absolute', right: '30px', top: '20px', color: 'grey'}} />

    </div>
    )
  }
}

export default ItemSearch;
