import React,{ Component} from "react";
import ItemForCart from "./content/ItemForCart";


export default class Cart extends Component{
    constructor(props){
        super();
        this.state = {
            total:props.getCart().length !== 0?props.getCart().map((item) => {return item.qty*item.price }).reduce((sum,num) =>{return sum+num}):0
        }
        this.updateTotal = this.updateTotal.bind(this);

    }
    updateTotal(){
        const cart = this.props.getCart();
        const newTotal = cart.map((item) => {return item.qty*item.price }).reduce((sum,num) =>{return sum+num});
        this.setState({total:newTotal})
    }
    render(){
        const cart = this.props.getCart();
        const itemList = cart.map((item,i) => <ItemForCart key={`item${i}`} item={item} className="col" addToCart={this.props.addToCart} updateTotal={this.updateTotal}/>);
        return (
            <div class="itemList">
                {itemList}
                <h2>{this.state.total}</h2>
            </div>
        )
    }
}