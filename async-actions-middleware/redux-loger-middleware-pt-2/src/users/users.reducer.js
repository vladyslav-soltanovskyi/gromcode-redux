import { SET_IS_FETCHING, SET_USER_DATA } from "./users.actions"

const initialState = {
  userData: null,
  isFetching: false
}

export const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload.status
      }
    case SET_USER_DATA:
      return {
        ...state,
        userData: action.payload.userData,
        isFetching: false
      }
    default:
      return state;
  }
}