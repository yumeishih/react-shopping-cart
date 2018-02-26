import { CALL_API } from 'Src/middleware/api';

export const FECTH_ITEMLIST_SUCCESS = 'FECTH_ITEMLIST_SUCCESS';
export const FECTH_ITEMLIST_FAILED = 'FECTH_ITEMLIST_FAILED';
export const fecthItemList = () => ({
  [CALL_API]: {
    endpoint: 'itemlist',
    props: {
      method: 'GET'
    },
    types: [FECTH_ITEMLIST_SUCCESS, FECTH_ITEMLIST_FAILED],
  }
});

export const FECTH_CART_SUCCESS = 'FECTH_CART_SUCCESS';
export const FECTH_CART_FAILED = 'FECTH_CART_FAILED';
export const fecthCart = () => ({
  [CALL_API]: {
    endpoint: 'cart',
    props: {
      method: 'GET'
    },
    types: [FECTH_CART_SUCCESS, FECTH_CART_FAILED],
    isChanged: false,
  }
});

export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
export const ADD_TO_CART_FAILED = 'ADD_TO_CART_FAILED';
export const addToCart = (item, qty) => ({
  [CALL_API]: {
    endpoint: 'addtocart',
    props: {
      method: 'POST',
      body: JSON.stringify({ ...item, qty }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    },
    types: [ADD_TO_CART_SUCCESS, ADD_TO_CART_FAILED],
    isChanged: true
  }
});


export const UPDATE_CART_SUCCESS = 'UPDATE_CART_SUCCESS';
export const UPDATE_CART_FAILED = 'UPDATE_CART_FAILED';
export const updateCart = (item, qty) => ({
  [CALL_API]: {
    endpoint: `${item.itemID}/updatecart`,
    props: {
      method: 'POST',
      body: JSON.stringify({ ...item, qty }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    },
    types: [UPDATE_CART_SUCCESS, UPDATE_CART_FAILED],
    isChanged: true
  }
});

export const DELETE_CART_SUCCESS = 'DELETE_CART_SUCCESS';
export const DELETE_CART_FAILED = 'DELETE_CART_FAILED';
export const deleteCart = (item) => ({
  [CALL_API]: {
    endpoint: `${item.itemID}/deletecart`,
    props: {
      method: 'GET',
    },
    types: [DELETE_CART_SUCCESS, DELETE_CART_FAILED],
    isChanged: true
  }
});

