import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Counter extends Component {
  constructor(props) {
    super();
    this.state = {
      value: props.qty || 1
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.doParent = this.doParent.bind(this);
    this.feed = this.feed.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.item.qty) this.setState({ value: nextProps.item.qty });
  }
  doParent(newValue) {
    if (this.props.getTotal) this.props.getTotal(newValue);
    else this.props.setQty(newValue);
  }
  increment() {
    const newValue = Number(this.state.value) + 1;
    this.setState({ value: newValue });
    this.doParent(newValue);
  }
  decrement() {
    if (this.state.value > 1) {
      const newValue = Number(this.state.value) - 1;
      this.setState({ value: newValue });
      this.doParent(newValue);
    }
  }
  feed(e) {
    const newValue = e.target.value;
    this.setState({ value: newValue });
    this.doParent(newValue);
  }

  render() {
    return (
      <div className="stepper-input">
        <button className="decrement" onClick={this.decrement}><span className="fa fa-minus-square-o" /></button>
        <input ref="feedQty" type="number" className="quantity" value={this.state.value} onChange={this.feed} min="1" step="1" />
        <button className="increment" onClick={this.increment}><span className="fa fa-plus-square-o" /></button>
        <br />
      </div>
    );
  }
}

Counter.propTypes = {
  item: PropTypes.object.isRequired,
  qty: PropTypes.any,
  getTotal: PropTypes.func,
  setQty: PropTypes.func,
};
