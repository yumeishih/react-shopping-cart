import React, { Component } from 'react';
import Item from './content/Item';
import { getItemList } from '../store';

export default class Content extends Component {
  getItemComponents() {
    return getItemList().map((item, i) => (<Item key={`item${i}`} item={item} />));
  }
  render() {
    return (
      <div className="content">
        <div className="itemList">{this.getItemComponents()}</div>
      </div>
    );
  }
}
