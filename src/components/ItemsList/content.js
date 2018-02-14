import React from 'react';
import Item from 'Containers/item';

const Content = (props) =>{
  return (
    <div className="content">
      <div className="itemList">{props.items.map((item)=>{ return <Item key={item.itemID}  item={item} />})}</div>
    </div>
  )
}

export default Content;