import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { AppBar, Input, Container } from '../components/ui';
import { FontIcon, List, ListItem, ListSubHeader, ListDivider, Button, IconButton } from 'react-toolbox';

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
  }

  componentWillMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {

    return(
    <Container>

      <IconButton icon="chevron_left" accent/>

      <div className={styles.appBar} style={{height: '140px'}}/>

      <Input type="text" floating={false} label="Produktname" />

      <List selectable ripple>
        <ListSubHeader caption='Im Kofferraum' />
        <ListItem
          avatar='http://www.ikea.com/de/de/images/products/jassa-couchtisch__0470185_PE612585_S4.JPG'
          caption='JASSA'
          legend="Couchtisch"
          rightActions={[
            <FontIcon key={1} value="add" onClick={() => console.log('ADD')} />,
            <FontIcon key={2} value="remove" onClick={() => console.log('ADD')} />,
          ]}
        />
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
