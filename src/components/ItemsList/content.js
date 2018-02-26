import React, { Component } from 'react';
import Item from 'Containers/item';
import PropTypes from 'prop-types';


export default class Content extends Component {
  componentDidMount() {
    this.props.fecthItemList();
  }
  render() {
    return (
      <div className="content">
        <div className="itemList">{this.props.items.map((item) => { return <Item key={item.itemID} item={item} />; })}</div>
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
  fecthItemList: PropTypes.func,
};

Content.defaultProps = {
  items: PropTypes.arrayOf(PropTypes.shape({
    itemID: '',
    itemImg: '',
    itemName: '',
    describe: '',
    price: 0,
  })),
  fecthItemList: null,
};
