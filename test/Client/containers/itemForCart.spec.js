import configureStore from 'redux-mock-store';
import React from 'react';
import { Provider } from 'react-redux';

import ItemForCart from 'Containers/itemForCart';
import ItemForCartComponent from 'Components/Cart/itemForCart';
import reducers from 'Src/reducers';


describe('/containers/content', () => {
  const middleWares = [];
  const mockStore = configureStore(middleWares);
  const store = mockStore(reducers);
  console.log(reducers)
  const wrapper = shallow(
    <Provider store={store}>
      <ItemForCart />
    </Provider>
  );
  it('ItemForCartComponent exist', () => {
    expect(wrapper.find(ItemForCartComponent)).to.exist;
  });
  it('Props exist: shoppingCart', () => {
    expect(wrapper.find('[shoppingCart]')).to.exist;
  });
  it('Props exist: deleteCart', () => {
    expect(wrapper.find('[deleteCart]')).to.exist;
  });
  it('Props exist: updateCart', () => {
    expect(wrapper.find('[updateCart]')).to.exist;
  });

})