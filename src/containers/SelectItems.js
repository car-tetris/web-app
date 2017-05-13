import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { ItemSearch } from '../components/selectItems';
import { Container } from '../components/ui';
import { FontIcon, List, ListItem, ListSubHeader, ListDivider, IconButton } from 'react-toolbox';

import styles from './select.css'

/**
* Select items container.
*/
class SelectItems extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  constructor() {
    super();

    // List of items which a already in car.
    this.inCarList = [
      {
        avatar: "http://www.ikea.com/de/de/images/products/jassa-couchtisch__0470185_PE612585_S4.JPG",
        caption: "JASSA",
        legend: "Couchtisch",
        count: 2
      },
      {
        avatar: "http://www.ikea.com/de/de/images/products/byas-tv-bank-wei-__0144833_PE304277_S4.JPG",
        caption: "BYÅS",
        legend: "TV-Bank",
        count: 1
      }
    ];
  }

  componentWillMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  /**
   * Increment count of an inCarList entry.
   * @param {number} index
   */
  incInCarList(index) {
    this.inCarList[index].count++;
    this.forceUpdate();
  }

  /**
   * Decrement count of an inCarList entry.
   * @param {number} index
   */
  decInCarList(index) {
    if(this.inCarList[index].count <= 1) {
    	this.inCarList = [
    		...this.inCarList.slice(0, index),
    		...this.inCarList.slice(index+1),
    	];
    }else{
      this.inCarList[index].count--;
    }
    this.forceUpdate();
  }

  render() {
    const { inCarList } = this;

    return(
    <Container>

      <IconButton icon="chevron_left" accent style={{color: 'white'}} onClick={() => this.context.router.push('/')}/>

      <br/>
      <div style={{width: '100%', textAlign: 'center', position: 'absolute', top: '40px', left: '0', right: '0'}}>
        <img className={styles.logo} src="/assets/images/cars/fill.png" alt="fill"  style={{margin: '0 auto'}}/>
        <br/>
        <span>60% beladen...</span>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>


      <div className={styles.appBar} style={{height: '155px'}}/>

      <ItemSearch />

      <List selectable ripple>
        <ListSubHeader caption='Im Kofferraum' />
        {inCarList.map((item, index) =>
          <ListItem
            avatar={item.avatar}
            caption={item.caption}
            legend={item.legend}
            rightActions={[
              <p>{item.count}</p>,
              <FontIcon value="remove" onClick={() => this.decInCarList(index)} />,
              <FontIcon value="add" onClick={() => this.incInCarList(index)} />
            ]}
          />
        )}
      </List>

    </Container>
    )
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectItems);
