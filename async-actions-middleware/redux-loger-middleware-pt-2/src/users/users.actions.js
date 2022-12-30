import { getUserData } from './users.gateway';

export const SET_IS_FETCHING = 'USERS/SET_IS_FETCHING';
export const SET_USER_DATA = 'USERS/SET_USER_DATA';

export const setIsFetching = (status) => ({ type: SET_IS_FETCHING, payload: { status }});
export const setUserData = (userData) => ({ type: SET_USER_DATA, payload: { userData }});

export const fetchUserData = (userName) => async (dispatch) => {
  try {
    dispatch(setIsFetching(true));
    const userData = await getUserData(userName);
    dispatch(setUserData(userData));
  } catch (err) {
    alert(err.message);
  }
}