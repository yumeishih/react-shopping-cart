import { combineReducers } from 'redux';
import ShoppingCartReducer from './shoppingCartReducer'
import itemsReducer from './itemsReducers'

const rootReducer = combineReducers({
  shoppingCart : ShoppingCartReducer,
  items : itemsReducer
});

export default rootReducer;