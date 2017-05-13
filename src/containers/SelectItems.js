import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';

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
        {/* TODO: Do your work, bitch! */}
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
