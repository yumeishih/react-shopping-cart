import React, { Component } from 'react';
import Item from './content/Item';
import { getItemList } from '../store';

export default class Content extends Component {
  render() {
    const itemList = getItemList().map((item, i) => <Item key={`item${i}`} item={item} />);
    return (
      <div className="content">
        <div className="itemList">{itemList}</div>
      </div>
    );
  }
}
