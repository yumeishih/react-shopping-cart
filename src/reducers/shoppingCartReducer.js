import { ADD_TO_CART_SUCCESS, UPDATE_CART_SUCCESS, DELETE_CART_SUCCESS, FECTH_CART_SUCCESS } from '../actions/index'

export default function(state = {
  shoppingCart:[],
  isChanged: false
} ,action) {
  console.log("shopping reducer(type): ", action.type )
  console.log("shopping reducer: ", action.payload )
  switch (action.type) {
    case ADD_TO_CART_SUCCESS:{
      return { ...state, shoppingCart: [...state.shoppingCart, action.payload], isChanged:action.isChanged}
    }
    case UPDATE_CART_SUCCESS: {
      return { ...state, isChanged:action.isChanged}
    }
    case DELETE_CART_SUCCESS: {
      return { ...state, isChanged:action.isChanged}
    }
    case FECTH_CART_SUCCESS: {
      return { ...state, shoppingCart: action.payload,isChanged:action.isChanged}
    }
  }
  return state
}
