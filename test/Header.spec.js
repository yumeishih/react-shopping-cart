import React from 'react';
import Header from '../src/js/components/Header'

describe('Header', () => {
  const wrapper = shallow(<Header />);
  it('type of header', () => {
    expect(wrapper.type()).to.equal('header');
  });
  it('has element "<IndexLink />"',()=>{
    expect(wrapper.find('IndexLink')).to.exist;
  });
  it('has element "<Link />"',()=>{
    expect(wrapper.find('Link')).to.exist;
  });
});
