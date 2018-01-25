import React, { Component } from 'react';
import Counter from './Counter';
import { addToCart,deleteFromCart } from '../../store';


export default class ItemForCart extends Component {
  constructor(props) {
    super();
    this.state = {
      total: props.item.qty * props.item.price
    };
    this.getTotal = this.getTotal.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  getTotal(qty) {
    const newTotal = this.props.item.price * Number(qty);
    this.setState({ total: newTotal });
    addToCart(this.props.item, qty);
    this.props.updateTotal();
  }

  deleteItem(e) {
    deleteFromCart(this.props.item);
    this.props.updateTotal();
    e.preventDefault();
  }

  render() {
    const { item } = this.props;
    return (
      <div className="itemforCart">
        <img src={item.itemImg} alt="item image" className="img" />
        <div className="iteminfoforCart">
          <h4>{item.itemName}</h4>
          <p>{item.describe}</p>
          <p>Price: {item.price}</p>
          <Counter
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
