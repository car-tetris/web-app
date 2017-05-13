import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { AppBar, Input } from '../components/ui';
import { FontIcon, List, ListItem, ListSubHeader, ListDivider } from 'react-toolbox';

//import styles from './selectItems.css'

/**
* Select items container.
*/
class SelectItems extends Component {

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
    <div>

      <AppBar leftIcon="menu" onLeftIconClick={() => console.log('click') }/>

      <Input type="text" floating={false} label="Produktname" />

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

    </div>
    )
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectItems);
