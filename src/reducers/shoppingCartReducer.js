import { ADD_TO_CART, UPDATE_CART, DELETE_CART, GET_TOTAL } from '../actions/index'

export default function(state = [] ,action) {
  switch (action.type) {
    case ADD_TO_CART: {
      return [...state, action.payload]
    }
    case UPDATE_CART: {
      state.splice(action.index, 1, action.payload);
      const newState = state.slice();
      return newState
    }
    case DELETE_CART: {
      state.splice(action.index, 1);
      const newState = state.slice();
      return newState
    }
  }
  return state
}

export const Total = (state = 0 ,action) => {
  switch(action.type) {
    case GET_TOTAL: {
      return action.payload
    }
  }
  return state
}