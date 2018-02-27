import itemsReducer from 'Reducers/itemsReducers'

describe('Reducers/itemsReducers', () => {
  const fakeitem = {
    itemID: 'fakeitem',
    itemImg: './src/imgs/items/fakeitem.jpg',
    itemName: 'fakeitem',
    describe: 'fakeitem',
    price: 10000,
    qty:2
  }
  it('Initial state', () => {
    const res = itemsReducer(undefined, {});
    expect(res).to.deep.equal({
      items: []
    })
  });
  it('FECTH_ITEMLIST_SUCCESS', () => {

    const res = itemsReducer(undefined, {
      type: 'FECTH_ITEMLIST_SUCCESS',
      payload: fakeitem
    });
    expect(res).to.deep.equal({
      items: fakeitem
    })
  });
});