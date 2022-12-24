import { createStore } from 'redux';

export const initialState = {
  usersList: []
}
export const ADD_USER =  'USERS/ADD_USER';
export const DELETE_USER =  'USERS/DELETE_USER';

const store = createStore(counterReducer);

export default store;