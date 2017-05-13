import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { AppBar, Layout, Panel } from 'react-toolbox';

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
    const { children } = this.props;

    return(
      <Layout>
        <Panel>
          {children}
        </Panel>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
