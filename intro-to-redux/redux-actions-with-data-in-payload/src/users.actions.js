import { ADD_USER, DELETE_USER } from "./store";

export const addUser = (dataUser) => ({ type: ADD_USER, paylod: dataUser });

export const deleteUser = (userId) => ({ type: DELETE_USER, paylod: userId });