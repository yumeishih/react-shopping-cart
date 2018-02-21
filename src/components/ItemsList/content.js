import React, { Component } from 'react';
import Item from 'Containers/item';

export default class  Content extends Component{
  componentDidMount() {
    this.props.fecthItemList();
  }
  render(){
    return (
      <div className="content">
        <div className="itemList">{this.props.items.map((item)=>{ return <Item key={item.itemID}  item={item} />})}</div>
      </div>
    )
  }
}

