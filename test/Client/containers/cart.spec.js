import configureStore from 'redux-mock-store';
import React from 'react';
import { Provider } from 'react-redux';

import Cart from 'Containers/cart';
import CartComponent from 'Components/Cart/cart'
import reducers from 'Src/reducers';


describe('/containers/cart', () => {
  const middleWares = [];
  const mockStore = configureStore(middleWares);
  const store = mockStore(reducers);
  console.log(reducers)
  const wrapper = shallow(
    <Provider store={store}>
      <Cart />
    </Provider>
  );
  it('CartComponent exist', () => {
    expect(wrapper.find(CartComponent)).to.exist;
  });
  it('Props exist: shoppingCart', () => {
    expect(wrapper.find('[shoppingCart]')).to.exist;
  });
  it('Props exist: isChanged', () => {
    expect(wrapper.find('[isChanged]')).to.exist;
  });
  it('Props exist: fecthCart', () => {
    expect(wrapper.find('[fecthCart]')).to.exist;
  });
})