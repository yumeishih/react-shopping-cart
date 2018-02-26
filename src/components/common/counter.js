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
    this.feed = this.feed.bind(this);
  }

  increment() {
    const newValue = Number(this.state.value) + 1;
    this.setState({ value: newValue });
    this.props.updateQty(newValue);
  }
  decrement() {
    if (this.state.value > 1) {
      const newValue = Number(this.state.value) - 1;
      this.setState({ value: newValue });
      this.props.updateQty(newValue);
    }
  }
  feed(e) {
    const newValue = e.target.value;
    this.setState({ value: newValue });
    this.props.updateQty(newValue);
  }

  render() {
    return (
      <div className="stepper-input">
        <button className="decrement" onClick={this.decrement}><span className="fa fa-minus-square-o" /></button>
        <input type="number" className="quantity" value={this.state.value} onChange={this.feed} min="1" step="1" />
        <button className="increment" onClick={this.increment}><span className="fa fa-plus-square-o" /></button>
        <br />
      </div>
    );
  }
}

Counter.propTypes = {
  item: PropTypes.shape({
    itemID: PropTypes.string,
    itemImg: PropTypes.string,
    itemName: PropTypes.string,
    describe: PropTypes.string,
    price: PropTypes.number,
    qty: PropTypes.number
  }),
  qty: PropTypes.number,
  updateQty: PropTypes.func,
};

Counter.defaultProps = {
  item: PropTypes.shape({
    itemID: '',
    itemImg: '',
    itemName: '',
    describe: '',
    price: 0,
    qty: 0
  }),
  qty: 0,
  updateQty: null
};
