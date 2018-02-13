import { combineReducers } from 'redux';
import ShoppingCartReducer, { Total } from './shoppingCartReducer'
import ItemsReducer from './itemsReducers'


const rootReducer = combineReducers({
  shoppingCart : ShoppingCartReducer,
  items : ItemsReducer,
  total: Total
});

export default rootReducer;