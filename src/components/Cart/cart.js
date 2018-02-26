import React, { Component} from 'react';
import ItemForCart from 'Containers/itemForCart';
export default class  Cart extends Component {
  constructor(props){
    super(props)
    props.fecthCart();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.isChanged) nextProps.fecthCart();
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


