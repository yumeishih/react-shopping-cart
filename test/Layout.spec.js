import React from 'react';
import Layout from '../src/js/components/Layout'

describe('Layout', () => {
  const wrapper = shallow(<Layout />);
  it('has a class name of "layout"', () => {
    expect(wrapper.find('.layout')).to.exist;
  });
  it('has element "<Header />"',()=>{
    expect(wrapper.find('Header')).to.exist;
  });
  it('has element "<Footer />"',()=>{
    expect(wrapper.find('Footer')).to.exist;
  });
});
