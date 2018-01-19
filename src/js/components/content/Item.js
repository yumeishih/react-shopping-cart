import React,{ Component} from "react"
import Counter from "./Counter"

export default class Item extends Component{
    constructor(props){
        super();
        this.state = {
            item: props.item
        }
        this.addToCart = this.addToCart.bind(this)
    }
    addToCart(e){
        const feedQty = document.getElementById(`counter_${this.state.item.itemID}`);
        this.props.addToCart(this.props.item, feedQty.value);
     }

    render(){
        const item = this.state.item
        return (
            <div className="item" id={item.itemID}>
                <img src={item.itemImg} />
                <div class="iteminfo">
                    <h4>{item.itemName}</h4>
                    <p>{item.describe}</p>
                    <p>Price: {item.price}</p>
                    <Counter  id={`counter_${item.itemID}`} item={item} addToCart = {this.props.addToCart} qty="1" />
                    <div>
                    <button class="btn btn-md btn-success addToCart" onClick={this.addToCart.bind(this)}><span class="fa fa-hand-peace-o"/> Add to Cart</button>
                    </div>
                </div>

            </div>
        );
    };
}