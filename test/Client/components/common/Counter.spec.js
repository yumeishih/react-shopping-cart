import React from 'react';
import Counter from 'Components/common/counter';

describe('/components/common/Counter', () => {
  const fakekey = 'fakeitemkey'
  const fakeitem = {
    itemID: 'fakeitem',
    itemImg: './src/imgs/items/fakeitem.jpg',
    itemName: 'fakeitem',
    describe: 'fakeitem',
    price: 10000,
    qty:2
  }
  const updateQty = spy();
  const decrementSpy = spy(Counter.prototype, 'decrement');
  const incrementSpy = spy(Counter.prototype, 'increment');
  const feedSpy = spy(Counter.prototype, 'feed');


  const wrapper = shallow(<Counter item={fakeitem} qty="1" updateQty = {updateQty}/>);

  it('type of Counter', () => {
    expect(wrapper.type()).to.equal('div');
  });
  it('has a class name of "stepper-input"', () => {
    expect(wrapper.find('.stepper-input')).to.exist;
  });
  it('first child is a "button" has class name of "decrement"', () => {
    expect(wrapper.childAt(0).type()).to.equal('button');
    expect(wrapper.childAt(0).props().className).to.equal('decrement');
  });

  it('second child is a "input" has class name of "quantity"', () => {
    expect(wrapper.childAt(1).type()).to.equal('input');
    expect(wrapper.childAt(1).props().className).to.equal('quantity');
  });
  it('third child is a "button" has class name of "increment"', () => {
    expect(wrapper.childAt(2).type()).to.equal('button');
    expect(wrapper.childAt(2).props().className).to.equal('increment');
  });

  it('decrement icon/qty =1: decrement() and props.updateQty()', () => {
    wrapper.find('button').at(0).simulate('click',{ preventDefault: () => {} });
    expect(decrementSpy.called).to.equal(true)
    expect(updateQty.called).to.equal(false)
  });
  it('decrement icon/qty >1: decrement() and props.updateQty()', () => {
    wrapper.setState({value:2})
    wrapper.find('button').at(0).simulate('click',{ preventDefault: () => {} });
    expect(decrementSpy.called).to.equal(true)
    expect(updateQty.called).to.equal(true)
  });

  it('increment icon: increment() and props.updateQty()', () => {
    wrapper.find('button').at(1).simulate('click',{ preventDefault: () => {} });
    expect(incrementSpy.called).to.equal(true)
    expect(updateQty.called).to.equal(true)
  });

  it('quantity icon: feed() and props.updateQty()', () => {
    const event = {target: {value: 99}};
    wrapper.find('input').simulate('change',event);
    expect(feedSpy.called).to.equal(true)
    expect(updateQty.called).to.equal(true)
  });

});

