import React, { Component} from 'react';
import ItemForCart from 'Containers/itemForCart';

export default class  Cart extends Component {
  componentWillMount(){
    this.props.getTotal(this.props.shoppingCart)
  }
  componentWillUpdate(nextProps, nextState){
    nextProps.getTotal(nextProps.shoppingCart)
  }

  render(){
    return (
      <div className="cart">
        <div className="itemListforCart">
          {this.props.shoppingCart.map((item) => <ItemForCart key={item.itemID} item={item}/> )}
        </div>
        <h2>Total:  {this.props.total} </h2>
      </div>
    )
  }
}


