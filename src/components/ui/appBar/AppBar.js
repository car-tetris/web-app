import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { AppBar as AppBarToolBox } from 'react-toolbox';

import styles from './appBar.css';

/**
 * AppBar
 */
class AppBar extends Component {

  static propTypes = {
    primary: PropTypes.bool
  };

  static defaultProps = {
    primary: true
  };

  constructor() {
    super();
  }

  componentWillMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    const {children, primary, ...props} = this.props;

    return(
      <AppBarToolBox
        className={`
          ${primary ? styles.primary: ''}
        `}
        {...props}
      >
        {children}
      </AppBarToolBox>
    )
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
