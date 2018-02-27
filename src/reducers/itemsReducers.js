import { FETCH_ITEMLIST_SUCCESS } from '../actions/index';

export default function (state = {
  items: []
}, action) {
  switch (action.type) {
    case FETCH_ITEMLIST_SUCCESS: {
      return { ...state, items: action.payload };
    }
    default: return state;
  }
}
