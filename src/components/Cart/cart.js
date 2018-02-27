import React, { Component } from 'react';
import ItemForCart from 'Components/Cart/itemForCart';
import calculateTotal from 'Assets/helper/calculateTotal';
import PropTypes from 'prop-types';


export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0
    };
    props.fetchCart();
  }

  componentWillReceiveProps(nextProps) {
    const total = calculateTotal(nextProps.shoppingCart);
    this.setState({ total });
    if (nextProps.isChanged) {
      nextProps.fetchCart();
    }
  }

  render() {
    const { deleteCart, updateCart } = this.props;
    return (
      <div className="cart">
        <div className="itemListforCart">
          {this.props.shoppingCart.map(item => (<ItemForCart
            key={item.itemID}
            item={item}
            deleteCart={deleteCart}
            updateCart={updateCart}
          />))}
        </div>
        <h2>Total: {this.state.total}</h2>
      </div>
    );
  }
}

Cart.propTypes = {
  shoppingCart: PropTypes.arrayOf(PropTypes.shape({
    itemID: PropTypes.string,
    itemImg: PropTypes.string,
    itemName: PropTypes.string,
    describe: PropTypes.string,
    price: PropTypes.number,
    qty: PropTypes.number,
    map: PropTypes.func
  })).isRequired,
  fetchCart: PropTypes.func.isRequired,
  deleteCart: PropTypes.func.isRequired,
  updateCart: PropTypes.func.isRequired,
  isChanged: PropTypes.bool.isRequired
};
