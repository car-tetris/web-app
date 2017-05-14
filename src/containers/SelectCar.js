import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { selectCarActions } from '../state/fe';

import { Container, Button } from '../components/ui';
import { Autocomplete } from 'react-toolbox';

import styles from './select.css'

/**
 * Select a car container.
 */
class SelectCar extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  state = {
    focus: false,
    carId: undefined
  };

  constructor() {
    super();

    this.cars = {
      1: {
        name: 'VW Polo',
        picture: 'polo',
        dim: { h: 70, w: 90, d: 70 }
      },
      2: {
        name: 'VW Golf',
        picture: 'golf',
        dim: { h: 90, w: 106, d: 83 }
      },
      3: {
        name: 'VW Passat',
        picture: 'passat',
        dim: { h: 89, w: 130, d: 117 }
      },
      4: {
        name: 'VW Touran',
        picture: 'touran',
        dim: { h: 93, w: 127, d: 114 }
      }
    };

    // Cars object for AutoComplete
    this.carsSelectMapping = {};
    Object.keys(this.cars).forEach(id => {
      this.carsSelectMapping[id] = this.cars[id].name;
    });
  }

  /**
   * Save data to store.
   */
  saveData() {
    const { carId } = this.state;
    this.props.addCar({ ...this.cars[carId], id: carId });
    this.context.router.push('/selectItems');
  }


  componentWillMount() {
    const { selectCar } = this.props;
    // Select which selected before.
    if(selectCar)
      this.setState({ carId: selectCar.id });
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    const { selectCar } = this.props;
    const { focus, carId } = this.state;
    const { cars, carsSelectMapping } = this;

    return(
      <Container style={focus? {top: (- screen.height/4 )} : {top: '0'}} className={styles.background}>
        <br/>
        <img className={styles.logo} src="/assets/images/logo.svg" alt="logo" />
        <br/>
        <br/>
        <br/>
        <img
          className={styles.carImage}
          src={"/assets/images/cars/" + (carId ? cars[carId].picture : "undefined") + ".png"}
          alt="logo"
        />
        <br/>
        <br/>
        <span>{carId ? cars[carId].name : ""}</span>
        <br/>
        <br/>
        <br/>
        <div className={styles.appBar} style={{height: '340px'}}/>
        <Autocomplete
          style={{textAlign: 'left'}}
          multiple={false}
          direction="down"
          selectedPosition="above"
          label="Auto auswählen"
          hint="VW..."
          onChange={(carId) => this.setState({ carId : Number(carId) }) }
          onFocus={() => this.setState({focus: true})}
          onBlur={() => this.setState({focus: false})}
          source={carsSelectMapping}
          value={carId}
          suggestionMatch="anywhere"
          showSuggestionsWhenValueIsSet
          className={styles.autoComplete}
        />
        <br/>
        <br/>
        <Button disabled={!carId} primary raised onClick={() => this.saveData()}>Auto beladen</Button>
        <br/>
        <br/>
        <br/>
        <br/>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  selectCar: state.fe.selectCar
});

const mapDispatchToProps = (dispatch) => ({
  addCar: (car) => dispatch(selectCarActions.addCar(car))
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectCar);
