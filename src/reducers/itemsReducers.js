import { FECTH_ITEMLIST_SUCCESS } from '../actions/index'

export default function(state={
  items:[]
} ,action) {
  switch (action.type) {
    case FECTH_ITEMLIST_SUCCESS:{
      return { ...state, items: action.payload}
    }
  }
  return state
}
