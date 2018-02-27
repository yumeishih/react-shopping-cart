import configureStore from 'redux-mock-store';
import React from 'react';
import { Provider } from 'react-redux';

import Item from 'Containers/item';
import ItemComponent from 'Components/ItemsList/item';
import reducers from 'Src/reducers';


describe('/containers/content', () => {
  const middleWares = [];
  const mockStore = configureStore(middleWares);
  const store = mockStore(reducers);
  console.log(reducers)
  const wrapper = shallow(
    <Provider store={store}>
      <Item />
    </Provider>
  );
  it('ItemComponent exist', () => {
    expect(wrapper.find(ItemComponent)).to.exist;
  });
  it('Props exist: shoppingCart', () => {
    expect(wrapper.find('[shoppingCart]')).to.exist;
  });
  it('Props exist: addToCart', () => {
    expect(wrapper.find('[addToCart]')).to.exist;
  });
  it('Props exist: updateCart', () => {
    expect(wrapper.find('[updateCart]')).to.exist;
  });

})