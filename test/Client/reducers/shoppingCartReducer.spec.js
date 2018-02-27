import shoppingCartReducer from 'Reducers/shoppingCartReducer'

describe('Reducers/shoppingCartReducer', () => {
  const fakeitem = {
    itemID: 'fakeitem',
    itemImg: './src/imgs/items/fakeitem.jpg',
    itemName: 'fakeitem',
    describe: 'fakeitem',
    price: 10000,
    qty:2
  }
  it('Initial state', () => {
    const res = shoppingCartReducer(undefined, {});
    expect(res).to.deep.equal({
      shoppingCart: [],
      isChanged: false
    })
  });
  it('ADD_TO_CART_SUCCESS', () => {
    const res = shoppingCartReducer(undefined, {
      type: 'ADD_TO_CART_SUCCESS',
      payload: fakeitem,
      isChanged: true
    });
    expect(res).to.deep.equal({
      shoppingCart: [fakeitem],
      isChanged: true
    })
  });
  it('UPDATE_CART_SUCCESS', () => {
    const res = shoppingCartReducer(undefined, {
      type: 'UPDATE_CART_SUCCESS',
      isChanged: true
    });
    expect(res).to.deep.equal({
      shoppingCart: [],
      isChanged: true
    })
  });
  it('DELETE_CART_SUCCESS', () => {
    const res = shoppingCartReducer(undefined, {
      type: 'DELETE_CART_SUCCESS',
      isChanged: true
    });
    expect(res).to.deep.equal({
      shoppingCart: [],
      isChanged: true
    })
  });
  it('FETCH_CART_SUCCESS', () => {
    const res = shoppingCartReducer(undefined, {
      type: 'FETCH_CART_SUCCESS',
      payload: [fakeitem],
      isChanged: false
    });
    expect(res).to.deep.equal({
      shoppingCart: [fakeitem],
      isChanged: false
    })
  });
});