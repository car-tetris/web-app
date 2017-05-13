import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { Container, Button } from '../components/ui';

import styles from './selectCar.css'

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
      <Container className={styles.background}>
        Select a car...<br/>
        <br/>
        <Button primary raised href="/selectItems">Weiter</Button>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectCar);
