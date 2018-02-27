import { ADD_TO_CART_SUCCESS, UPDATE_CART_SUCCESS, DELETE_CART_SUCCESS, FETCH_CART_SUCCESS } from '../actions/index';

export default function (state = {
  shoppingCart: [],
  isChanged: false
}, action) {
  switch (action.type) {
    case ADD_TO_CART_SUCCESS: {
      return { ...state, shoppingCart: [...state.shoppingCart, action.payload], isChanged: action.isChanged };
    }
    case UPDATE_CART_SUCCESS: {
      return { ...state, isChanged: action.isChanged };
    }
    case DELETE_CART_SUCCESS: {
      return { ...state, isChanged: action.isChanged };
    }
    case FETCH_CART_SUCCESS: {
      return { ...state, shoppingCart: action.payload, isChanged: action.isChanged };
    }
    default: {
      return state;
    }
  }
}
