import configureStore from 'redux-mock-store';
import React from 'react';
import { Provider } from 'react-redux';

import Content from 'Containers/content';
import ContentComponent from 'Components/ItemsList/content'
import reducers from 'Src/reducers';


describe('/containers/content', () => {
  const middleWares = [];
  const mockStore = configureStore(middleWares);
  const store = mockStore(reducers);
  console.log(reducers)
  const wrapper = shallow(
    <Provider store={store}>
      <Content />
    </Provider>
  );
  it('ContentComponent exist', () => {
    expect(wrapper.find(ContentComponent)).to.exist;
  });
  it('Props exist: item', () => {
    expect(wrapper.find('[item]')).to.exist;
  });
  it('Props exist: fecthItemList', () => {
    expect(wrapper.find('[fecthItemList]')).to.exist;
  });

})