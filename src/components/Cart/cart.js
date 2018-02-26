import React, { Component } from 'react';
import ItemForCart from 'Containers/itemForCart';
import calculateTotal from 'Assets/helper/calculateTotal';
import PropTypes from 'prop-types';


export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0
    };
    props.fecthCart();
  }

  componentWillReceiveProps(nextProps) {
    const total = calculateTotal(nextProps.shoppingCart);
    this.setState({ total });
    if (nextProps.isChanged) {
      nextProps.fecthCart();
    }
  }

  render() {
    return (
      <div className="cart">
        <div className="itemListforCart">
          {this.props.shoppingCart.map((item) => <ItemForCart key={item.itemID} item={item} />)}
        </div>
        <h2>Total:  {this.state.total} </h2>
      </div>
    );
  }
}

Cart.propTypes = {
  shoppingCart: PropTypes.shape({
    itemID: PropTypes.string,
    itemImg: PropTypes.string,
    itemName: PropTypes.string,
    describe: PropTypes.string,
    price: PropTypes.number,
    qty: PropTypes.number,
    map: PropTypes.func
  }),
  fecthCart: PropTypes.func,
  isChanged: PropTypes.func
};

Cart.defaultProps = {
  shoppingCart: PropTypes.shape({
    itemID: '',
    itemImg: '',
    itemName: '',
    describe: '',
    price: 0,
    qty: 0
  }),
  fecthCart: null,
  isChanged: null
};
