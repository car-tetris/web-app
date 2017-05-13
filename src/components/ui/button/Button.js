import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { Button } from 'react-toolbox';

import styles from './button.css';

/**
 * Select a car container.
 */
class SelectCar extends Component {

  static propTypes = {
    primary: PropTypes.bool,
    accent: PropTypes.bool
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
    const {children, primary, accent, ...props} = this.props;

    return(
      <Button
        className={`
          ${primary ? styles.primary : ''}
          ${accent ? styles.accent : ''}
        `}
        {...props}
      >
        {children}
      </Button>
    )
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectCar);
