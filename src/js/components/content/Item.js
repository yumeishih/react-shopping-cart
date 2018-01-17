import React,{ Component} from "react"


export default class Item extends Component{
    render(){
        const item = this.props.item
        return (
            <div className="item">
                <img src={item.itemImg} />
                <div class="iteminfo">
                    <h4>{item.itemName}</h4>
                    <p>{item.describe}</p>
                    <p>Price: {item.price}</p>
                </div>
            </div>
        );
    };
}