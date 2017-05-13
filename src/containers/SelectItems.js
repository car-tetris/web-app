import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { ItemSearch, LoadedCar } from '../components/selectItems';
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
        description: "Couchtisch",
        id: "903.456.63",
        packages: [{ h: 12, w: 60, d: 65 }]
      },
      2: {
        picture: "http://www.ikea.com/de/de/images/products/byas-tv-bank-wei-__0144833_PE304277_S4.JPG",
        name: "BYÅS",
        description: "TV-Bank",
        id: "802.277.97",
        packages: [{ h: 7, w: 43, d: 171 }, { h: 5, w: 42, d: 171 }]
      },
      3: {
        picture: "http://www.ikea.com/de/de/images/products/pax-kleiderschrank-wei-__0300268_PE426268_S4.JPG",
        name: "Pax",
        description: "Kleiderschrank mit Schiebetüren",
        id: "102.373.56",
        packages: [{ h: 5, w: 79, d: 235 }, { h: 7, w: 25, d: 235 }]
      },
      4: {
        picture: "http://www.ikea.com/de/de/images/products/pax-kleiderschrank-wei-__0300268_PE426268_S4.JPG",
        name: "Pax",
        description: "Kleiderschrank mit Schiebetüren",
        id: "202.145.71",
        packages: [{ h: 7, w: 60, d: 245 }]
      },
      5: {
        picture: "http://www.ikea.com/de/de/images/products/pax-kleiderschrank-wei-__0300268_PE426268_S4.JPG",
        name: "Pax",
        description: "Kleiderschrank mit Schiebetüren",
        id: "302.632.45",
        packages: [{ h: 4, w: 8, d: 67 }]
      },
      6: {
        picture: "http://www.ikea.com/de/de/images/products/pax-kleiderschrank-wei-__0300268_PE426268_S4.JPG",
        name: "Pax",
        description: "Kleiderschrank mit Schiebetüren",
        id: "402.568.95",
        packages: [{ h: 4, w: 6, d: 73 }]
      },
      7: {
        picture: "http://www.ikea.com/de/de/images/products/pax-kleiderschrank-wei-__0300268_PE426268_S4.JPG",
        name: "Pax",
        description: "Kleiderschrank mit Schiebetüren",
        id: "902.779.61",
        packages: [{ h: 2, w: 59, d: 71 }]
      },
      8: {
        picture: "http://www.ikea.com/de/de/images/products/billy-bucherregal-wei-__0252367_PE391149_S4.JPG",
        name: "Billy",
        description: "Bücherregal",
        id: "002.638.50",
        packages: [{ h: 13, w: 29, d: 205 }]
      },
      9: {
        picture: "http://www.ikea.com/de/de/images/products/lack-beistelltisch-rot__0115088_PE268302_S4.JPG",
        name: "Lack",
        description: "Beistelltisch",
        id: "801.937.35",
        packages: [{ h: 5, w: 55, d: 75 }]
      },
      10: {
        picture: "http://www.ikea.com/de/de/images/products/klippan-er-sofa-grau__0239990_PE379591_S4.JPG",
        name: "Klippan Sofa",
        description: "2er Sofa",
        id: "100.722.56",
        packages: [{ h: 40, w: 91, d: 182 }]
      },
      11: {
        picture: "http://www.ikea.com/de/de/images/products/klippan-er-sofa-grau__0239990_PE379591_S4.JPG",
        name: "Klippan Sofa",
        description: "2er Sofa",
        id: "202.788.55",
        packages: [{ h: 8, w: 28, d: 37 }]
      },
      12: {
        picture: "http://www.ikea.com/de/de/images/products/poang-sessel-grau__0497180_PE629007_S4.JPG",
        name: "Poäng Schwingsessel",
        description: "Sessel",
        id: "500.547.26",
        packages: [{ h: 7, w: 68, d: 73 }]
      },
      13: {
        picture: "http://www.ikea.com/de/de/images/products/poang-sessel-grau__0497180_PE629007_S4.JPG",
        name: "Poäng Schwingsessel",
        description: "Sessel",
        id: "703.624.70",
        packages: [{ h: 15, w: 58, d: 70 }]
      },
      14: {
        picture: "http://www.ikea.com/de/de/images/products/kallax-regal-wei-__0243994_PE383246_S4.JPG",
        name: "Kallax",
        description: "Regal",
        id: "802.758.87",
        packages: [{ h: 17, w: 41, d: 152 }]
      },
      15: {
        picture: "http://www.ikea.com/de/de/images/products/ektorp-er-sofa-grau__0386827_PE559169_S4.JPG",
        name: "Ektorp Sofa",
        description: "3er Sofa",
        id: "201.850.31",
        packages: [{ h: 45, w: 88, d: 201 }]
      },
      16: {
        picture: "http://www.ikea.com/de/de/images/products/leifarne-stuhl-blau__0376674_PE553887_S4.JPG",
        name: "Leifarne Stuhl",
        description: "Stuhl für Esszimmer",
        id: "102.919.18",
        packages: [{ h: 43, w: 45, d: 50 }]
      },
      17: {
        picture: "http://www.ikea.com/de/de/images/products/leifarne-stuhl-blau__0376674_PE553887_S4.JPG",
        name: "Leifarne Stuhl",
        description: "Stuhl für Esszimmer",
        id: "002.879.74",
        packages: [{ h: 6, w: 36, d: 84 }]
      },
      18: {
        picture: "http://www.ikea.com/de/de/images/products/strandmon-ohrensessel-braun__0534682_PE649222_S4.JPG",
        name: "Strandmon",
        description: "Sessel",
        id: "303.223.39",
        packages: [{ h: 83, w: 92, d: 93 }]
      }
    };

    this.inCarList = [];
    this.totalCount = 0;
  }

  componentWillMount() {
    const { selectCar } = this.props;
    // Go back to select a car.
    if(!selectCar)
      this.context.router.push('/');
  }

  componentWillReceiveProps(nextProps) {
  }

  /**
   * Increment count of an inCarList entry.
   * @param {number} index
   */
  incInCarList(index) {
    this.inCarList[index].count++;
    this.totalCount++;
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
    this.totalCount--;
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
    const prevElement = this.inCarList.find(item => productId === item.productId);

    if(prevElement) {
      prevElement.count++;
    } else {
      this.inCarList.push({
        productId: productId,
        count: 1
      });
    }
    this.totalCount++;
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
      <LoadedCar value={this.totalCount * 10}/>
      <br/>

      <div className={styles.appBar} style={{height: '190px'}}/>

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
                caption={productList[productId].name + ' ' + '(' + productList[productId].id + ')' }
                legend={productList[productId].description}
                onClick={() => this.addProduct(productId)}
                rightActions={[
                  <FontIcon value="add"/>
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
            caption={productList[item.productId].name + ' ' + '(' + productList[item.productId].id + ')' }
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
  selectCar: state.fe.selectCar
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectItems);
