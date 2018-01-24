import React, { Component } from 'react';
import Counter from './Counter';
import Store from '../../store';

export default class Item extends Component {
  constructor(props) {
    super();
    this.state = {
      item: props.item,
      qty:1
    };
    this.addToCart = this.addToCart.bind(this);
    this.setQty =this.setQty.bind(this);
  }
  setQty(newQty) {
    this.setState({qty:newQty})
  }
  addToCart() {
    const store = new Store();
    store.addToCart(this.state.item, this.state.qty);
  }

  render() {
    const item = this.state.item;
    return (
      <div className="item" id={item.itemID}>
        <img src={item.itemImg} alt="Item image" />
        <div className="iteminfo">
          <h4>{item.itemName}</h4>
          <p>{item.describe}</p>
          <p>Price: {item.price}</p>
          <Counter
            id={`counter_${item.itemID}`}
            item={item}
            qty="1"
            setQty = {this.setQty}
          />
          <div>
            <button className="btn btn-md btn-success addToCart" onClick={this.addToCart.bind(this)}><span className="fa fa-hand-peace-o" /> Add to Cart</button>
          </div>
        </div>

      </div>
    );
  }
}
