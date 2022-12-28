import { combineReducers, createStore } from 'redux';
import { usersReducer } from './users/users.reducer';

const store = createStore(combineReducers({
  users: usersReducer
}));

export default store;