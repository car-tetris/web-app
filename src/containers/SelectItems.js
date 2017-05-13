import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { AppBar } from '../components/ui';
import { FontIcon, List, ListItem, ListSubHeader, ListDivider } from 'react-toolbox';

//import styles from './selectItems.css'

/**
 * Select items container.
 */
class SelectItems extends Component {

  constructor() {
    super();
  }

  componentWillMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {

    return(
      <div>
        <AppBar leftIcon="menu" onLeftIconClick={() => console.log('click') }/>
        Select a items...
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectItems);
