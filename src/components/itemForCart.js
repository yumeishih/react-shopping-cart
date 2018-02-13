import React, { Component } from 'react';

import PropTypes from 'prop-types';
import Counter from 'Components/counter';

export default class ItemForCart extends Component {
  constructor(props) {
    super();
    this.state = {
      total: props.item.qty * props.item.price
    };
    this.updateState = this.updateState.bind(this);
    this.onBtnClick = this.onBtnClick.bind(this);
  }
  updateState(qty) {
    const newTotal = this.props.item.price * Number(qty);
    this.setState({ total: newTotal });
    const { item, shoppingCart } = this.props;
    const index = shoppingCart.map((item) => { return item.itemID}).indexOf(item.itemID)
    this.props.updateCart(this.props.item, qty, index);
  }

  onBtnClick() {
    const { item, shoppingCart } = this.props;
    const index = shoppingCart.map((item) => { return item.itemID}).indexOf(item.itemID)
    this.props.deleteCart(index)
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
            updateParentState={this.updateState}
          />
          <p>Total: {this.state.total}<button className="trash" onClick={this.onBtnClick}><span className="fa fa-trash" /></button></p>
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
};

ItemForCart.defaultProps = {
  item: PropTypes.shape({
    itemID: '',
    itemImg: '',
    itemName: '',
    describe: '',
    price: 0,
    qty: 0
  })
};
