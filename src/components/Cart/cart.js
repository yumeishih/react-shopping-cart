import React, { Component} from 'react';
import ItemForCart from 'Containers/itemForCart';
import calculateTotal from 'Assets/helper/calculateTotal'

export default class  Cart extends Component {
  constructor(props){
    super(props)
    this.state = {
      total:0
    }
    props.fecthCart();
  }

  componentWillReceiveProps(nextProps){
    const total = calculateTotal(nextProps.shoppingCart);
    this.setState({total})
    console.log("total: ",total)
    if(nextProps.isChanged) {
      nextProps.fecthCart();
    }
  }

  render(){

    return (
      <div className="cart">
        <div className="itemListforCart">
          {this.props.shoppingCart.map((item) => <ItemForCart key={item.itemID} item={item}/> )}
        </div>
        <h2>Total:  {this.state.total} </h2>
      </div>
    )
  }
}


