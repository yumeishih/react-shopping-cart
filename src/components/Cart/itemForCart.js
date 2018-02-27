import React, { Component } from 'react';

import PropTypes from 'prop-types';
import Counter from 'Components/common/counter';

export default class ItemForCart extends Component {
  constructor(props) {
    super();
    this.state = {
      total: props.item.qty * props.item.price
    };
    this.updateQty = this.updateQty.bind(this);
    this.deleteCartClick = this.deleteCartClick.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.item.qty !== nextProps.item.qty) this.setState({ total: nextProps.item.qty * nextProps.item.price });
  }

  updateQty(qty) {
    const newTotal = this.props.item.price * Number(qty);
    this.setState({ total: newTotal });
    const { item, shoppingCart } = this.props;
    const index = shoppingCart.map((element) => { return element.itemID; }).indexOf(item.itemID);
    this.props.updateCart(this.props.item, qty, index);
  }

  deleteCartClick() {
    const { item, shoppingCart } = this.props;
    const index = shoppingCart.map((element) => { return element.itemID; }).indexOf(item.itemID);
    this.props.deleteCart(item, index);
  }

  render() {
    const { item } = this.props;
    return (
      <div className="itemforCart">
        <img src={item.itemImg} alt={item.itemID} className="img" />
        <div className="iteminfoforCart">
          <h4>{item.itemName}</h4>
          <p>{item.describe}</p>
          <p>Price: {item.price}</p>
          <Counter
            item={item}
            qty={item.qty}
            updateQty={this.updateQty}
          />
          <p>Total: {this.state.total}<button className="trash" onClick={this.deleteCartClick}><span className="fa fa-trash" /></button></p>
        </div>
      </div>
    );
  }
}

ItemForCart.propTypes = {
  item: PropTypes.shape({
    itemID: PropTypes.string,
    itemImg: PropTypes.string,
    itemName: PropTypes.string,
    describe: PropTypes.string,
    price: PropTypes.number,
    qty: PropTypes.number
  }),
  shoppingCart: PropTypes.arrayOf(PropTypes.shape({
    itemID: PropTypes.string,
    itemImg: PropTypes.string,
    itemName: PropTypes.string,
    describe: PropTypes.string,
    price: PropTypes.number,
    qty: PropTypes.number
  })).isRequired,
  updateCart: PropTypes.func.isRequired,
  deleteCart: PropTypes.func.isRequired
};

ItemForCart.defaultProps = {
  item: PropTypes.shape({
    itemID: '',
    itemImg: '',
    itemName: '',
    describe: '',
    price: 0,
    qty: 0
  }),
};
