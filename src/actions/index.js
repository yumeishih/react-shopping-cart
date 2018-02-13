export const ADD_TO_CART = 'ADD_TO_CART'
export function addToCart(item,qty) {
  item['qty'] = qty
  return {
    type: ADD_TO_CART,
    payload: item
  }
}

export const UPDATE_CART= 'UPDATE_CART'
export function updateCart(item,qty,index) {
  item['qty'] = qty
  return {
    type: UPDATE_CART,
    payload: item,
    index: index
  }
}

export const DELETE_CART= 'DELETE_CART'
export function deleteCart(index) {
  return {
    type: DELETE_CART,
    index: index
  }
}

export const GET_TOTAL = 'GET_TOTAL '
export function getTotal(shoppingCart) {
  const total =  shoppingCart.length !== 0 ?
  shoppingCart.map((item) => { return item.qty * item.price; })
    .reduce((sum, num) => { return sum + num; }) : 0;
  return {
    type: GET_TOTAL,
    payload: total
  }
}
