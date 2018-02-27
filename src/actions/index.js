import { CALL_API } from 'Src/middleware/api';

export const FETCH_ITEMLIST_SUCCESS = 'FETCH_ITEMLIST_SUCCESS';
export const FETCH_ITEMLIST_FAILED = 'FETCH_ITEMLIST_FAILED';
export const fetchItemList = () => ({
  [CALL_API]: {
    endpoint: 'itemlist',
    props: {
      method: 'GET'
    },
    types: [FETCH_ITEMLIST_SUCCESS, FETCH_ITEMLIST_FAILED],
  }
});

export const FETCH_CART_SUCCESS = 'FETCH_CART_SUCCESS';
export const FETCH_CART_FAILED = 'FETCH_CART_FAILED';
export const fetchCart = () => ({
  [CALL_API]: {
    endpoint: 'cart',
    props: {
      method: 'GET'
    },
    types: [FETCH_CART_SUCCESS, FETCH_CART_FAILED],
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

