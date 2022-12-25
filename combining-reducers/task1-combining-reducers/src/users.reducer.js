import { ADD_USER, DELETE_USER, UPDATE_USER } from "./users.actions";

const initialState = {
  usersList: []
}

export const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_USER: 
      return { ...state, usersList: [...state.usersList, action.payload] };
    case DELETE_USER:
      return { ...state, usersList: state.usersList.filter(user => user.id !== action.payload.userId) };
    case UPDATE_USER: {
      const { userId, dataUser } = action.payload;
      return { ...state, usersList: state.usersList.map(user => user.id !== userId ? user : { ...user, ...dataUser }) };
    }
    default: 
      return state;
  }
}