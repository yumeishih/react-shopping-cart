import React from 'react';
import Item from '../../src/js/components/content/Item'

describe('/content/Item', () => {
  const fakekey = 'fakeitemkey'
  const fakeitem = {
    itemID: 'fakeitem',
    itemImg: './src/imgs/items/fakeitem.jpg',
    itemName: 'fakeitem',
    describe: 'fakeitem',
    price: 10000
  }
  const wrapper = shallow(<Item key={fakekey} item={fakeitem} />);
  it('type of Item', () => {
    // localStorage['ItemList'] = JSON.stringify(ItemList);
    // console.log(JSON.parse(localStorage['ItemList']))
    expect(wrapper.type()).to.equal('div');
  });
  it('has a class name of "item"', () => {
    expect(wrapper.find('.item')).to.exist;
  });
  it('has a id name of "fakeitem"', () => {
    expect(wrapper.props().id).to.equal(fakeitem.itemID);
  });

  it('first child is a "img"', () => {
    expect(wrapper.childAt(0).type()).to.equal('img');
  });
  it('first child "img" src==itemImg', () => {
    expect(wrapper.childAt(0).props().src).to.equal(fakeitem.itemImg);
  });

  it('second child is a "div" has class name of "iteminfo"', () => {
    expect(wrapper.childAt(1).props().className).to.equal('iteminfo');
  });
  it('second child "iteminfo" has 5 children', () => {
    expect(wrapper.childAt(1).children()).to.have.length(5);
  });
  it('second child "iteminfo" contains <h4>{item.itemName}</h4><p>{item.describe}</p><p>Price: {item.price}</p>', () => {
    expect(wrapper.childAt(1).containsAllMatchingElements([
      <h4>{fakeitem.itemName}</h4>,
      <p>{fakeitem.describe}</p>,
      <p>Price: {fakeitem.price}</p>
    ])).to.equal(true);
  });
  it('second child "iteminfo" contains <Counter/>', () => {
    expect(wrapper.childAt(1).find('Counter')).to.exist;
  });
});

