import React,{ Component} from "react";
import ItemForCart from "./content/ItemForCart";


export default class ShowItem extends Component{
    render(){
        const cart = this.props.getCart();
        const itemList = cart.map((item,i) => <ItemForCart key={`item${i}`} item={item} className="col"/>);
        return (
            <div class="itemList">
                {itemList}
            </div>
        )
    }
}