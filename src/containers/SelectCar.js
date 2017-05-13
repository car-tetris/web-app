import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { Container, Button } from '../components/ui';
import { Dropdown } from 'react-toolbox';

import styles from './selectCar.css'

/**
 * Select a car container.
 */
class SelectCar extends Component {

  state = {
    dropdownValue: 1
  };

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  constructor() {
    super();
  }

  componentWillMount() {
  }

  componentWillReceiveProps(nextProps) {
  }


  render() {

    const cars = [
      { value: 1, label: 'VW Polo' },
      { value: 2, label: 'VW Golf'},
      { value: 3, label: 'VW Passat' },
      { value: 4, label: 'VW Touran'}
    ];

    return(
      <Container width="fixed" className={styles.background}>
        <br/>
        <img className={styles.logo} src="/assets/images/logo.png" alt="logo" />
        <br/>
        <br/>
        <br/>
        <br/>
        <Dropdown
          label="Auto auswählen"
          onChange={(value) => this.setState({value: value})}
          source={cars}
          value={this.state.value}
        />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Button
          primary
          raised
          onClick={() => this.context.router.push('/selectItems')}
        >
          Beladen
        </Button>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectCar);
