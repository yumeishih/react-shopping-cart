import React,{ Component} from "react"

export default class Counter extends  Component{
    constructor(props){
        super();
        this.state={
            value: props.qty
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    increment(e){
        const newValue=Number(this.state.value)+1
        this.setState({value: newValue})
        if(this.props.getTotal) this.props.getTotal(newValue);
        e.preventDefault();
    }
    decrement(e){
        if(this.state.value > 1){
            const newValue=Number(this.state.value)-1
            this.setState({value: newValue})
            if(this.props.getTotal) this.props.getTotal(newValue);
        }
        e.preventDefault();
    }
    feed(e){
        const feedQty = document.getElementById(this.props.id);
        const newValue = feedQty.value
        this.setState({value: newValue})
        if(this.props.getTotal) this.props.getTotal(newValue);
    }

    render(){
        return(
            <div>
                <div class="stepper-input">
                    <a href="#" className="decrement" onClick={this.decrement}><span class="fa fa-minus-square-o"/></a>
		    		<input id={this.props.id} ref="feedQty" type="number" className="quantity" value={this.state.value} onChange={this.feed.bind(this)} min="1" step="1"/>
                    <a href="#" className="increment" onClick={this.increment}><span class="fa fa-plus-square-o"/></a>
                    <br></br>
                </div>
            </div>

        )
    }
}