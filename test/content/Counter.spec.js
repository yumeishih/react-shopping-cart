import React from 'react';
import Counter from '../../src/js/components/content/Counter'

describe('/content/Counter', () => {
  const fakekey = 'fakeitemkey'
  const fakeitem = {
    itemID: 'fakeitem',
    itemImg: './src/imgs/items/fakeitem.jpg',
    itemName: 'fakeitem',
    describe: 'fakeitem',
    price: 10000,
    qty:2
  }
  const setQtySpy = spy();
  const getTotalSpy = spy();
  const decrementSpy = spy(Counter.prototype, 'decrement');
  const incrementSpy = spy(Counter.prototype, 'increment');
  const feedSpy = spy(Counter.prototype, 'feed');


  const wrapper = shallow(<Counter id={`counter_${fakeitem.itemID}`} item={fakeitem} qty="1" setQty = {setQtySpy}/>);

  it('type of Counter', () => {
    expect(wrapper.type()).to.equal('div');
  });
  it('has a class name of "stepper-input"', () => {
    expect(wrapper.find('.stepper-input')).to.exist;
  });
  it('first child is a "a" has class name of "decrement"', () => {
    expect(wrapper.childAt(0).type()).to.equal('a');
    expect(wrapper.childAt(0).props().className).to.equal('decrement');
  });

  it('second child is a "input" has class name of "quantity"', () => {
    expect(wrapper.childAt(1).type()).to.equal('input');
    expect(wrapper.childAt(1).props().className).to.equal('quantity');
  });
  it('third child is a "a" has class name of "increment"', () => {
    expect(wrapper.childAt(2).type()).to.equal('a');
    expect(wrapper.childAt(2).props().className).to.equal('increment');
  });

  it('Item/decrement icon/qty =1: decrement() and props.setQty()', () => {
    const wrapperItem = shallow(<Counter id={`counter_${fakeitem.itemID}`} item={fakeitem} qty="1" setQty = {setQtySpy}/>);
    wrapperItem.find('a').at(0).simulate('click',{ preventDefault: () => {} });
    expect(decrementSpy.called).to.equal(true)
    expect(setQtySpy.called).to.equal(false)
  });
  it('Item/decrement icon/qty >1: decrement() and props.setQty()', () => {
    const wrapperItem = shallow(<Counter id={`counter_${fakeitem.itemID}`} item={fakeitem} qty="1" setQty = {setQtySpy}/>);
    wrapperItem.setState({value:2})
    wrapperItem.find('a').at(0).simulate('click',{ preventDefault: () => {} });
    expect(decrementSpy.called).to.equal(true)
    expect(setQtySpy.called).to.equal(true)
  });
  it('Cart/decrement icon/qty =1: decrement() and props.getTotalSpy()', () => {
    const wrapperCart = shallow(<Counter id={`counter_${fakeitem.itemID}`} item={fakeitem} qty={fakeitem.qty} getTotal={getTotalSpy}/>);
    wrapperCart.setState({value:1})
    wrapperCart.find('a').at(0).simulate('click',{ preventDefault: () => {} });
    expect(decrementSpy.called).to.equal(true)
    expect(getTotalSpy.called).to.equal(false)
  });
  it('Cart/decrement icon/qty >1: decrement() and props.getTotalSpy()', () => {
    const wrapperCart = shallow(<Counter id={`counter_${fakeitem.itemID}`} item={fakeitem} qty={fakeitem.qty} getTotal={getTotalSpy}/>);
    wrapperCart.find('a').at(0).simulate('click',{ preventDefault: () => {} });
    expect(decrementSpy.called).to.equal(true)
    expect(getTotalSpy.called).to.equal(true)
  });
  it('Item/increment icon: increment() and props.setQty()', () => {
    const wrapperItem = shallow(<Counter id={`counter_${fakeitem.itemID}`} item={fakeitem} qty="1" setQty = {setQtySpy}/>);
    wrapperItem.find('a').at(1).simulate('click',{ preventDefault: () => {} });
    expect(incrementSpy.called).to.equal(true)
    expect(setQtySpy.called).to.equal(true)
  });
  it('Cart/increment icon: increment() and props.getTotalSpy()', () => {
    const wrapperCart = shallow(<Counter id={`counter_${fakeitem.itemID}`} item={fakeitem} qty={fakeitem.qty} getTotal={getTotalSpy}/>);
    wrapperCart.find('a').at(1).simulate('click',{ preventDefault: () => {} });
    expect(incrementSpy.called).to.equal(true)
    expect(getTotalSpy.called).to.equal(true)
  });
  it('Item/quantity icon: feed() and props.setQty()', () => {
    const event = {target: {value: 99}};
    const wrapperItem = shallow(<Counter id={`counter_${fakeitem.itemID}`} item={fakeitem} qty="1" setQty = {setQtySpy}/>);
    wrapperItem.find('input').simulate('change',event);
    expect(feedSpy.called).to.equal(true)
    expect(setQtySpy.called).to.equal(true)
  });
  it('Cart/quantity icon: feed() and props.getTotalSpy()', () => {
    const event = {target: {value: 99}};
    const wrapperCart = shallow(<Counter id={`counter_${fakeitem.itemID}`} item={fakeitem} qty={fakeitem.qty} getTotal={getTotalSpy}/>);
    wrapperCart.find('input').simulate('change',event);
    expect(feedSpy.called).to.equal(true)
    expect(getTotalSpy.called).to.equal(true)
  });
});

