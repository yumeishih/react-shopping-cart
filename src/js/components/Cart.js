import React, { Component } from 'react';
import ItemForCart from './content/ItemForCart';
import { getCart } from '../store';

export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      total: getCart().length !== 0 ?
        getCart().map((item) => { return item.qty * item.price; })
          .reduce((sum, num) => { return sum + num; }) : 0
    };
    this.updateTotal = this.updateTotal.bind(this);
  }
  updateTotal() {
    const cart = getCart();
    const newTotal = cart.length !== 0 ?
      cart.map((item) => { return item.qty * item.price; })
        .reduce((sum, num) => { return sum + num; }) : 0;
    this.setState({ total: newTotal });
  }
  render() {
    const itemList = getCart().map((item, i) => (<ItemForCart
      key={`item${i}`}
      item={item}
      updateTotal={this.updateTotal}
    />));
    return (
      <div className="cart">
        <div className="itemListforCart">
          {itemList}
        </div>
        <h2>Total: {this.state.total}</h2>
      </div>
    );
  }
}
