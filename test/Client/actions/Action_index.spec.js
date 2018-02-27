import { CALL_API } from 'Src/middleware/api';

import * as Actions from 'Actions/index'
import * as ActionsType from 'Actions/index'

describe('Actions', () => {
  const fakeItem={
    itemID: 'fakeitem',
    itemImg: './src/imgs/items/fakeitem.jpg',
    itemName: 'fakeitem',
    describe: 'fakeitem',
    price: 10000,
    qty:1
  }
  it('fecthItemList', () => {
    const expectedAction = {
      endpoint: 'itemlist',
      props: {
        method: 'GET'
      },
      types: [ActionsType.FECTH_ITEMLIST_SUCCESS, ActionsType.FECTH_ITEMLIST_FAILED],
    }
    expect(Actions.fecthItemList()[CALL_API]).to.deep.equal(expectedAction);
  });
  it('fecthCart', () => {
    const expectedAction = {
      endpoint: 'cart',
      props: {
        method: 'GET'
      },
      types: [ActionsType.FECTH_CART_SUCCESS, ActionsType.FECTH_CART_FAILED],
      isChanged: false,
    }
    expect(Actions.fecthCart()[CALL_API]).to.deep.equal(expectedAction);
  });
  it('addToCart', () => {
    const expectedAction = {
      endpoint: 'addtocart',
      props: {
        method: 'POST',
        body: JSON.stringify({ ...fakeItem, qty:2 }),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      },
      types: [ActionsType.ADD_TO_CART_SUCCESS, ActionsType.ADD_TO_CART_FAILED],
      isChanged: true
    }
    expect(Actions.addToCart(fakeItem,2)[CALL_API]).to.deep.equal(expectedAction);
  });
  it('updateCart', () => {
    const expectedAction = {
      endpoint: `${fakeItem.itemID}/updatecart`,
      props: {
        method: 'POST',
        body: JSON.stringify({ ...fakeItem, qty:2 }),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      },
      types: [ActionsType.UPDATE_CART_SUCCESS, ActionsType.UPDATE_CART_FAILED],
      isChanged: true
    }
    expect(Actions.updateCart(fakeItem,2)[CALL_API]).to.deep.equal(expectedAction);
  });
  it('deleteCart', () => {
    const expectedAction = {
      endpoint: `${fakeItem.itemID}/deletecart`,
      props: {
        method: 'GET',
      },
      types: [ActionsType.DELETE_CART_SUCCESS, ActionsType.DELETE_CART_FAILED],
      isChanged: true
    }
    expect(Actions.deleteCart(fakeItem)[CALL_API]).to.deep.equal(expectedAction);
  });






})