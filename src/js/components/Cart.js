import React,{ Component} from "react";
import ItemForCart from "./content/ItemForCart";
import Store from '../store'

export default class Cart extends Component{
    constructor(props){
        super();
        this.store = new Store();
        this.state = {
            total:this.store.getCart().length !== 0?this.store.getCart().map((item) => {return item.qty*item.price }).reduce((sum,num) =>{return sum+num}):0
        }
        this.updateTotal = this.updateTotal.bind(this);

    }
    updateTotal(){
        const cart = this.store.getCart();
        const newTotal = cart.length !==0?cart.map((item) => {return item.qty*item.price }).reduce((sum,num) =>{return sum+num}):0;
        this.setState({total:newTotal})
    }
    render(){
        const cart = this.store.getCart();
        const itemList = cart.map((item,i) => <ItemForCart
            key={`item${i}`}
            item={item}
            className="col"
            updateTotal={this.updateTotal}
        />);
        return (
            <div class="cart">
                <div class="itemList">
                    {itemList}
                </div>
                <h2>Total: {this.state.total}</h2>
            </div>
        )
    }
}