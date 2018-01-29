import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Counter from 'Components/content/counter';
import { addToCart } from 'Src/store';

export default class Item extends Component {
  constructor() {
    super();
    this.state = {
      qty: 1
    };
    this.addToCart = this.addToCart.bind(this);
    this.setQty = this.setQty.bind(this);
  }
  setQty(newQty) {
    this.setState({ qty: newQty });
  }
  addToCart() {
    addToCart(this.props.item, this.state.qty);
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
            setQty={this.setQty}
          />
          <div>
            <button className="btn btn-md btn-success addToCart" onClick={this.addToCart}><span className="fa fa-hand-peace-o" /> Add to Cart</button>
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
