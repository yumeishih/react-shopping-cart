import React from 'react';
import Content from 'Components/content'

describe('Content', () => {
  const getItemComponentsSpy = spy(Content.prototype,'getItemComponents')
  const wrapper = shallow(<Content />);
  it('type of Content', () => {
    expect(wrapper.type()).to.equal('div');
  });
  it('has a class name of "content"', () => {
    expect(wrapper.find('.content')).to.exist;
  });
  it('has children has class name of "itemList"', () => {
    expect(wrapper.props().children.props.className).to.equal('itemList');
  });
  it('getItemComponents has been called', () => {
    expect(getItemComponentsSpy.called).to.equal(true)
  });
});
