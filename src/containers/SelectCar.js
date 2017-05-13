import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { Container, Button } from '../components/ui';
import { Autocomplete } from 'react-toolbox';

import styles from './selectCar.css'

/**
 * Select a car container.
 */
class SelectCar extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  state = {
    focus: false
  };

  constructor() {
    super();

    this.selectedCar = [''];
  }


  componentWillMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    const {focus} = this.state;

    let car = 'undefined';
    let carname = '';

    if(this.selectedCar[0] == "1") {
      car = 'polo';
      carname = 'VW Polo';
    }
    if(this.selectedCar[0] == "2") {
      car = 'golf';
      carname = 'VW Golf';
    }
    if(this.selectedCar[0] == "3") {
      car = 'passat';
      carname = 'VW Passat';
    }
    if(this.selectedCar[0] == "4"){
      car = 'touran';
      carname = 'VW Touran';
    }


    const cars = {
      1: 'VW Polo',
      2: 'VW Golf',
      3: 'VW Passat',
      4: 'VW Touran'
    };

    return(
      <Container width="fixed" style={focus? {top: '-300px'} : {top: '0'}} className={styles.background}>
        <br/>
        <img className={styles.logo} src="/assets/images/logo.png" alt="logo" />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <img className={styles.carImage} src={"/assets/images/cars/" + car + ".png"} alt="logo"/><br/>
        <br/>
        <span>{carname}</span>
        <br/>
        <br/>
        <Autocomplete
          multiple={false}
          direction="down"
          selectedPosition="above"
          label="Auto auswählen"
          hint="VW..."
          onChange={(value) => {
            this.selectedCar = [];
            this.selectedCar = value;
            this.forceUpdate();
          }}
          onFocus={() => this.setState({focus: true})}
          onBlur={() => this.setState({focus: false})}
          source={cars}
        />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Button primary raised onClick={() => this.context.router.push('/selectItems')}>Weiter</Button>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectCar);
