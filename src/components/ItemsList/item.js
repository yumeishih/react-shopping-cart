import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Counter from 'Components/common/counter';

export default class Item extends Component {
  constructor() {
    super();
    this.state = {
      qty: 1
    };
    this.addToCartClick = this.addToCartClick.bind(this);
    this.updateQty = this.updateQty.bind(this);
  }
  updateQty(newQty) {
    this.setState({ qty: newQty });
  }
  addToCartClick() {
    const { item, shoppingCart } = this.props;
    const index = shoppingCart.map((item) => { return item.itemID}).indexOf(item.itemID)
    if(index === -1) {
      this.props.addToCart(item,this.state.qty);
    }
    else {
      this.props.updateCart(item,this.state.qty,index);
    }
  }

  render() {
    const { item } = this.props;
    return (
      <div className="item">
        <img src={item.itemImg} alt={item.itemID} />
        <div className="iteminfo">
          <h4>{item.itemName}</h4>
          <p>{item.describe}</p>
          <p>Price: {item.price}</p>
          <Counter
            item={item}
            qty={1}
            updateQty={this.updateQty}
          />
          <div>
            <button className="btn btn-md btn-success addToCart" onClick={this.addToCartClick}><span className="fa fa-hand-peace-o" /> Add to Cart</button>
          </div>
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  item: PropTypes.shape({
    itemID: PropTypes.string,
    itemImg: PropTypes.string,
    itemName: PropTypes.string,
    describe: PropTypes.string,
    price: PropTypes.number,
    qty: PropTypes.number
  }),
};

Item.defaultProps = {
  item: PropTypes.shape({
    itemID: '',
    itemImg: '',
    itemName: '',
    describe: '',
    price: 0,
    qty: 0
  })
};
