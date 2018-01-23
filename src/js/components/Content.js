import React, { Component } from 'react';
import Item from './content/Item';
import Store from '../store';

export default class Content extends Component {
  render() {
    const store = new Store();
    const ItemList = store.getItemList();
    const itemList = ItemList.map((item, i) => <Item key={`item${i}`} item={item} />);
    return (
      <div className="content">
        <div className="itemList">{itemList}</div>
      </div>
    );
  }
}
