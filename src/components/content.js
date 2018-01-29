import React, { Component } from 'react';
import Item from 'Components/content/item';
import { getItemList } from 'Src/store';

export default class Content extends Component {
  getItemComponents() {
    return getItemList().map((item) => (<Item key={item.itemID} item={item} />));
  }
  render() {
    return (
      <div className="content">
        <div className="itemList">{this.getItemComponents()}</div>
      </div>
    );
  }
}
