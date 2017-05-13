import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { ItemSearch } from '../components/selectItems';
import { Container, Button } from '../components/ui';
import { FontIcon, List, ListItem, ListSubHeader, ListDivider, IconButton } from 'react-toolbox';

import styles from './select.css'

/**
* Select items container.
*/
class SelectItems extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  state = {
    searchFilter: ''
  }

  constructor() {
    super();

    // List of products
    this.productList = {
      1: {
        picture: "http://www.ikea.com/de/de/images/products/jassa-couchtisch__0470185_PE612585_S4.JPG",
        name: "JASSA",
        description: "Couchtisch"
      },
      2: {
        picture: "http://www.ikea.com/de/de/images/products/byas-tv-bank-wei-__0144833_PE304277_S4.JPG",
        name: "BYÅS",
        description: "TV-Bank"
      },
      3: {
        picture: "http://www.ikea.com/de/de/images/products/pax-kleiderschrank-wei-__0300268_PE426268_S4.JPG",
        name: "Pax",
        description: "Kleiderschrank mit Schiebetüren"
      },
      4: {
        picture: "http://www.ikea.com/de/de/images/products/lack-beistelltisch-rot__0115088_PE268302_S4.JPG",
        name: "Lack",
        description: "Beistelltisch"
      },
      5: {
        picture: "http://www.ikea.com/de/de/images/products/klippan-er-sofa-grau__0239990_PE379591_S4.JPG",
        name: "Kippan Sofa",
        description: "2er Sofa"
      },
      6: {
        picture: "http://www.ikea.com/de/de/images/products/kallax-regal-wei-__0243994_PE383246_S4.JPG",
        name: "Kallax",
        description: "Regal"
      },
      7: {
        picture: "http://www.ikea.com/de/de/images/products/leifarne-stuhl-blau__0376674_PE553887_S4.JPG",
        name: "Leifarne Stuhl",
        description: "Stuhl für Esszimmer"
      }
    };

    this.inCarList = [];
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

  /**
   * Search filter for products.
   */
  filterProducts(value) {
    const { searchFilter } = this.state;
    const { productList } = this;

    const dividedSearch = searchFilter.split(" ");
    let textStr = "";
    let found = true;
    // Search logic
    return Object.keys(productList).filter((id) => {
      textStr = productList[id].name + " " + productList[id].description;
      found = true;
      for(var i = 0; i < dividedSearch.length; i++) {
        if(dividedSearch[i].length > 0)
          if(!textStr.match(new RegExp(dividedSearch[i], "i"))) {
            found = false;
            break;
          }
      }
      return found;
    });
  }

  /**
   * Add product by product id.
   */
  addProduct(productId) {
    console.log(productId);
    this.inCarList.push({
      productId: productId,
      count: 1
    });
    this.forceUpdate();
  }

  render() {
    const { searchFilter } = this.state;
    const { inCarList, productList } = this;

    const filteredProductList = this.filterProducts();

    console.log(filteredProductList);

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

      <ItemSearch
        onChange={(value) => this.setState({ searchFilter: value })}
      />

      <List selectable ripple>

        {searchFilter.length > 1 &&
          <span>
            <ListSubHeader caption='Ergebnisse' />
            {filteredProductList.map((productId) =>
              <ListItem
                key={productId}
                avatar={productList[productId].picture}
                caption={productList[productId].name}
                legend={productList[productId].description}
                rightActions={[
                  <Button floating mini raised icon="add" onClick={() => this.addProduct(productId)} />
                ]}
              />
            )}
          </span>
        }

        <ListSubHeader caption='Im Kofferraum' />
        {inCarList.length > 0 && inCarList.map((item, index) =>
          <ListItem
            key={index}
            avatar={productList[item.productId].picture}
            caption={productList[item.productId].name}
            legend={productList[item.productId].description}
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
