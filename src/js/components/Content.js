import React,{ Component} from "react";
import ItemList from "./content/itemList";
import Item from "./content/Item";

export default class ShowItem extends Component{
    render(){
        const itemList = ItemList.map((item,i) => <Item key={`item${i}`} item={item} className="col" addToCart = {this.props.addToCart}/>);
        return <div class="itemList">{itemList}</div>
    }
}
