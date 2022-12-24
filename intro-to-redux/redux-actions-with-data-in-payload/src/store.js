import { createStore } from 'redux';
import { usersReducer } from './users.reducer';

export const initialState = {
  usersList: []
}
export const ADD_USER =  'USERS/ADD_USER';
export const DELETE_USER =  'USERS/DELETE_USER';

const store = createStore(usersReducer);

export default store;