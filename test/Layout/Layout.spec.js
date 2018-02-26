import React from 'react';
import Layout from 'Components/Layout/layout'

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
