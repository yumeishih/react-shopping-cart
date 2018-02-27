import React from 'react';
import Footer from 'Components/Layout/footer';

describe('/components/Layout/Footer', () => {
  const wrapper = shallow(<Footer />);
  it('type of footer', () => {
    expect(wrapper.type()).to.equal('footer');
  });
  it('has element "<p>"',()=>{
    expect(wrapper.find('p')).to.exist;
  });
});
