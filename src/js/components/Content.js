import React,{ Component} from "react";
import ItemList from "./content/itemList";
import Item from "./content/Item";

export default class ShowItem extends Component{
    render(){
        const itemList = ItemList.map((item,i) => <Item key={i} item={item} />);
        return <div>{itemList}</div>
    }
}
