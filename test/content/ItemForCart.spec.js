import React from 'react';
import ItemForCart from 'Components/content/itemForCart'

describe('/content/ItemForCart', () => {
  const fakekey = 'fakeitemkey'
  const fakeitem = {
    itemID: 'fakeitem',
    itemImg: './src/imgs/items/fakeitem.jpg',
    itemName: 'fakeitem',
    describe: 'fakeitem',
    price: 10000,
    qty:2
  }
  const updateTotalSpy = spy()
  const wrapper = shallow(<ItemForCart key={fakekey} item={fakeitem} updateTotal={updateTotalSpy}/>);
  it('type of ItemForCart', () => {
    expect(wrapper.type()).to.equal('div');
  });
  it('has a class name of "itemforCart"', () => {
    expect(wrapper.find('.itemforCart')).to.exist;
  });

  it('first child is a "img"', () => {
    expect(wrapper.childAt(0).type()).to.equal('img');
  });
  it('first child "img" src==itemImg', () => {
    expect(wrapper.childAt(0).props().src).to.equal(fakeitem.itemImg);
  });

  it('second child is a "div" has class name of "iteminfoforCart"', () => {
    expect(wrapper.childAt(1).props().className).to.equal('iteminfoforCart');
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
  it('show Total', () => {
    expect(wrapper.childAt(1).childAt(4).text()).to.equal(`Total: ${fakeitem.price*fakeitem.qty}`)
  });
  it('delete icon: deleteItem() and props.updatetotal()', () => {
    const deleteItemSpy = spy(ItemForCart.prototype, 'deleteItem');
    const deleteWrapper = shallow(<ItemForCart key={fakekey} item={fakeitem} updateTotal={updateTotalSpy}/>);
    deleteWrapper.find('button').simulate('click',{ preventDefault: () => {} });
    expect(deleteItemSpy.called).to.equal(true)
    expect(updateTotalSpy.called).to.equal(true)
    deleteItemSpy.restore()
  });
});

