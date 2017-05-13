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
  }

  componentWillMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {

    return(
    <div>

      <AppBar leftIcon="menu" onLeftIconClick={() => console.log('click') }/>

      <Input type="text" floating={false} label="Produktname" />

      <List selectable ripple>
        <ListSubHeader caption='Im Kofferraum' />
        <ListItem
          avatar='http://www.ikea.com/de/de/images/products/jassa-couchtisch__0470185_PE612585_S4.JPG'
          caption='JASSA'
          legend="Couchtisch"
          rightActions={[
            <FontIcon value="add" onClick={() => console.log('ADD')} />,
            <FontIcon value="remove" onClick={() => console.log('ADD')} />,
          ]}
        />
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
