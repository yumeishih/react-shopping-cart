import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super();
    this.state = {
      value: props.qty ? props.qty : 1
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.doParent = this.doParent.bind(this);
  }
  doParent(newValue){
    if (this.props.getTotal) this.props.getTotal(newValue);
    else this.props.setQty(newValue);
  }
  increment(e) {
    const newValue = Number(this.state.value) + 1;
    this.setState({ value: newValue });
    this.doParent(newValue);
    e.preventDefault();
  }
  decrement(e) {
    if (this.state.value > 1) {
      const newValue = Number(this.state.value) - 1;
      this.setState({ value: newValue });
      this.doParent(newValue)
    }
   e.preventDefault();
  }
  feed(e) {
    const newValue = e.target.value;
    this.setState({ value: newValue });
    this.doParent(newValue)
  }

  render() {
    return (
      <div className="stepper-input">
        <a href="#" className="decrement" onClick={this.decrement}><span className="fa fa-minus-square-o" /></a>
        <input id={this.props.id} ref="feedQty" type="number" className="quantity" value={this.state.value} onChange={this.feed.bind(this)} min="1" step="1" />
        <a href="#" className="increment" onClick={this.increment}><span className="fa fa-plus-square-o" /></a>
        <br />
      </div>
    );
  }
}
