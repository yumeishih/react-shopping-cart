import React, { Component } from 'react';
import Counter from './Counter';
import Store from '../../store';


export default class ItemForCart extends Component {
  constructor(props) {
    super();
    this.state = {
      item: props.item,
      total: props.item.qty * props.item.price
    };
    this.getTotal = this.getTotal.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  getTotal(qty) {
    const newTotal = this.state.item.price * Number(qty);
    this.setState({ total: newTotal });
    const store = new Store();
    store.addToCart(this.state.item, qty);
    this.props.updateTotal();
  }

  deleteItem(e) {
    const store = new Store();
    store.deleteFromCart(this.state.item);
    this.props.updateTotal();
    e.preventDefault();
  }

  render() {
    const item = this.props.item;
    return (
      <div className="itemforCart" id={item.itemID}>
        <img src={item.itemImg} alt="item image" className="img" />
        <div className="iteminfoforCart">
          <h4>{item.itemName}</h4>
          <p>{item.describe}</p>
          <p>Price: {item.price}</p>
          <Counter
            id={`counter_${item.itemID}`}
            item={item}
            qty={item.qty}
            getTotal={this.getTotal}
          />
          <p>Total: {this.state.total}<a href="#" className="trash" onClick={this.deleteItem}><span className="fa fa-trash" /></a></p>
        </div>
      </div>
    );
  }
}
