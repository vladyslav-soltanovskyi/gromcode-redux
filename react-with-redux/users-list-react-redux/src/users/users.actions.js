export const ADD_USER =  'USERS/ADD_USER';
export const DELETE_USER =  'USERS/DELETE_USER';

export const addUser = (dataUser) => ({ type: ADD_USER, payload: dataUser });
export const deleteUser = (userId) => ({ type: DELETE_USER, payload: { userId } });