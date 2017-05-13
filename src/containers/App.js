import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';

import styles from './app.css'

/**
 * App wrapper
 */
class App extends Component {

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
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
