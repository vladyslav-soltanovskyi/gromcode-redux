import { combineReducers, createStore } from 'redux';
import { optionsReducer } from './options/options.reducer';

const store = createStore(combineReducers({
  options: optionsReducer
}));

export default store;