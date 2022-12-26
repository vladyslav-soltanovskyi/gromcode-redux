import { combineReducers, createStore } from 'redux';
import { cartReducer } from './cart.reducer';
import { languageReducer } from './language.reducer';
import { userReducer } from './user.reducer';

const store = createStore(combineReducers({
  language: languageReducer,
  user: userReducer,
  cart: cartReducer
}));

export default store;