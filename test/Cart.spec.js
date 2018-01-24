import React from 'react';
import Cart from '../src/js/components/Cart'

describe('Cart', () => {
  const wrapper = shallow(<Cart />);
  it('type of Cart', () => {
    expect(wrapper.type()).to.equal('div');
  });
  it('has a class name of "cart"', () => {
    expect(wrapper.find('.cart')).to.exist;
  });
  it('first child has class name of "itemListforCart"', () => {
    expect(wrapper.props().children[0].props.className).to.equal('itemListforCart');
  });
  it('second child type of "h2"', () => {
    expect(wrapper.props().children[1].type).to.equal('h2');
  });
});
