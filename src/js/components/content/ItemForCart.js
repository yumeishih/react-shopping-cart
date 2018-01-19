import React,{ Component} from "react"
import Counter from "./Counter"

export default class ItemForCart extends Component{
    constructor(props){
        super();
        this.state = {
            item: props.item,
            total: props.item.qty*props.item.price
        }
        this.getTotal = this.getTotal.bind(this)
    }

    getTotal(qty){
        const newTotal =  this.state.item.price*Number(qty);
        this.setState({total: newTotal});
        this.props.addToCart(this.state.item, qty);
    }

    render(){
        const item = this.props.item
        const calculate = () =>{
            const feedQty = document.getElementById(`counter_${this.state.item.itemID}`);
            const total = Number(feedQty.value) * this.state.item.qty;
            return total;
        };
        return (
            <div className="item" id={item.itemID}>
                <img src={item.itemImg} />
                <div class="iteminfo">
                    <h4>{item.itemName}</h4>
                    <p>{item.describe}</p>
                    <p>Price: {item.price}</p>
                    <Counter
                        id={`counter_${item.itemID}`}
                        item={item}
                        qty={item.qty}
                        getTotal={this.getTotal}
                    />
                    <p>Total: {this.state.total} </p>
                </div>

            </div>
        );
    };
}