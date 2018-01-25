import React, { Component } from 'react';
import ItemForCart from './content/ItemForCart';
import { getCart } from '../store';

export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      total: this.calculateTotal()
    };
    this.updateTotal = this.updateTotal.bind(this);
  }

  getItemForCartComponents() {
    return getCart().map((item, i) => (<ItemForCart
      key={`item${i}`}
      item={item}
      updateTotal={this.updateTotal}
    />));
  }
  calculateTotal() {
    const cart = getCart();
    return cart.length !== 0 ?
      cart.map((item) => { return item.qty * item.price; })
        .reduce((sum, num) => { return sum + num; }) : 0;
  }
  updateTotal() {
    this.setState({ total: this.calculateTotal() });
  }
  render() {
    return (
      <div className="cart">
        <div className="itemListforCart">
          {this.getItemForCartComponents()}
        </div>
        <h2>Total: {this.state.total}</h2>
      </div>
    );
  }
}
