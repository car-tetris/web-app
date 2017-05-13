import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { Button } from 'react-toolbox';

//import styles from './selectCar.css'

/**
 * Select a car container.
 */
class SelectCar extends Component {

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
        Select a car...
        <Button primary raised href="/selectItems">Weiter</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectCar);
