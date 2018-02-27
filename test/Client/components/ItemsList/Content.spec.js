import React from 'react';
import Content from 'Components/ItemsList/content';

describe('/components/ItemsList/Content', () => {
  console.log(Content.prototype)
  const fakefecthItemList = spy()
  const fakeitems = []
  const wrapper = shallow(<Content fecthItemList = {fakefecthItemList} items={fakeitems}/>);
  it('type of Content', () => {
    expect(wrapper.type()).to.equal('div');
  });
  it('has a class name of "content"', () => {
    expect(wrapper.find('.content')).to.exist;
  });
  it('has children has class name of "itemList"', () => {
    expect(wrapper.props().children.props.className).to.equal('itemList');
  });
  it('fecthItemList has been called', () => {
    expect(fakefecthItemList.called).to.equal(true)
  });
});
