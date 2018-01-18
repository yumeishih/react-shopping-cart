import React,{ Component} from "react"

export default class Counter extends  Component{
    constructor(){
        super();
        this.state={
            value: 1
        }
        this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
    }
    increment(e){
        this.setState({value: this.state.value+1});
        e.preventDefault();
    }
    decrement(e){
        if(this.state.value > 1){
            this.setState({value: this.state.value-1});
        }
        e.preventDefault();
    }
    feed(e){

    }
    render(){
        return(
            <div class="stepper-input">
                <a href="#" className="decrement" onClick={this.decrement}><span class="fa fa-minus-square-o"/></a>
				<input type="number" className="quantity" value={this.state.value} onChange={this.feed.bind(this)} />
                <a href="#" className="increment" onClick={this.increment}><span class="fa fa-plus-square-o"/></a>
            </div>
        )
    }
}