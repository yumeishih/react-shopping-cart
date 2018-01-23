import React from 'react';
import Layout from '../src/js/components/Layout'

describe('Layout', () => {
  const wrapper = shallow(<Layout />);
  it('has a class name of "layout"', () => {
    expect(wrapper.find('.layout')).to.have.length(1);
  });
});

describe('a passing test', () => {
  it('should pass', () => {
    expect(true).to.be.true;
  });
});