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
  componentWillReceiveProps(nextProps){
    if(nextProps.item) this.setState({ total: nextProps.item.qty * nextProps.item.price });
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
          <p>Total: {this.state.total}<button className="trash" onClick={this.deleteItem}><span className="fa fa-trash" /></button></p>
        </div>
      </div>
    );
  }
}
