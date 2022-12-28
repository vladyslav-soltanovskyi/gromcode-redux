import { NEXT_PAGE, PREV_PAGE } from "./users.actions";
import { users } from "./users";

const initialState = {
  usersList: users,
  currentPage: 0
}

export const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case NEXT_PAGE:
      return { ...state, currentPage: state.currentPage + 1 };
    case PREV_PAGE:
      return { ...state, currentPage: state.currentPage - 1 };
    default: 
      return state;
  }
}