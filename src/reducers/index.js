import { combineReducers } from 'redux';
import ShoppingCartReducer, { Total } from './shoppingCartReducer'
import ItemsReducer from './itemsReducers'


const rootReducer = combineReducers({
  ShoppingCartReducer,
  ItemsReducer,
});

export default rootReducer;