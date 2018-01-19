import React,{ Component} from "react"
import Counter from "./Counter"

export default class ItemForCart extends Component{
    render(){
        const item = this.props.item
        return (
            <div className="item" id={item.itemID}>
                <img src={item.itemImg} />
                <div class="iteminfo">
                    <h4>{item.itemName}</h4>
                    <p>{item.describe}</p>
                    <p>Price: {item.price}</p>
                    <Counter  id={`counter_${item.itemID}`} item={item} qty={item.qty}/>
                </div>

            </div>
        );
    };
}