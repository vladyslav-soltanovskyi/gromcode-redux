import { ADD_USER, DELETE_USER } from "./store";

export const addUser = (dataUser) => ({ type: ADD_USER, payload: dataUser });

export const deleteUser = (userId) => ({ type: DELETE_USER, payload: userId });