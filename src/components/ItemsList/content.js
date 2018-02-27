import React, { Component } from 'react';
import Item from 'Components/ItemsList/item';
import PropTypes from 'prop-types';


export default class Content extends Component {
  componentDidMount() {
    this.props.fetchItemList();
  }
  render() {
    const { addToCart, updateCart, shoppingCart } = this.props;
    return (
      <div className="content">
        <div className="itemList">{this.props.items.map(item => (<Item
          key={item.itemID}
          item={item}
          shoppingCart={shoppingCart}
          addToCart={addToCart}
          updateCart={updateCart}
        />))}
        </div>
      </div>
    );
  }
}

Content.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    itemID: PropTypes.string,
    itemImg: PropTypes.string,
    itemName: PropTypes.string,
    describe: PropTypes.string,
    price: PropTypes.number,
    map: PropTypes.func
  })),
  shoppingCart: PropTypes.arrayOf(PropTypes.shape({
    itemID: PropTypes.string,
    itemImg: PropTypes.string,
    itemName: PropTypes.string,
    describe: PropTypes.string,
    price: PropTypes.number,
    qty: PropTypes.number
  })).isRequired,
  fetchItemList: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  updateCart: PropTypes.func.isRequired,
};

Content.defaultProps = {
  items: PropTypes.arrayOf(PropTypes.shape({
    itemID: '',
    itemImg: '',
    itemName: '',
    describe: '',
    price: 0,
  })),
};
