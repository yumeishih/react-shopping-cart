import React,{ Component} from "react";
import ItemForCart from "./content/ItemForCart";


export default class Cart extends Component{
    constructor(props){
        super();
        this.state = {
            total:props.getCart()==null?props.getCart().map((item) => {return item.qty*item.price }).reduce((sum,num) =>{return sum+num}):0
        }
        this.updateTotal = this.updateTotal.bind(this);

    }
    updateTotal(){
        const cart = this.props.getCart();
        const total = cart?1:0;
    }
    render(){
        const cart = this.props.getCart();
        const itemList = cart.map((item,i) => <ItemForCart key={`item${i}`} item={item} className="col" addToCart={this.props.addToCart} />);
        return (
            <div class="itemList">
                {itemList}
                <h2>{this.state.total}</h2>
            </div>
        )
    }
}