import React from 'react';
import Content from 'Components/ItemsList/content';

describe('/components/ItemsList/Content', () => {
  console.log(Content.prototype)
  const fakefetchItemList = spy()
  const fakeitems = []
  const wrapper = shallow(<Content fetchItemList = {fakefetchItemList} items={fakeitems}/>);
  it('type of Content', () => {
    expect(wrapper.type()).to.equal('div');
  });
  it('has a class name of "content"', () => {
    expect(wrapper.find('.content')).to.exist;
  });
  it('has children has class name of "itemList"', () => {
    expect(wrapper.props().children.props.className).to.equal('itemList');
  });
  it('fetchItemList has been called', () => {
    expect(fakefetchItemList.called).to.equal(true)
  });
});
