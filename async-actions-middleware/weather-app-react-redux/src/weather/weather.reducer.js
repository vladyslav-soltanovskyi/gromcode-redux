import { SET_IS_FETCHING, SET_WEATHER_DATA } from "./weather.actions"

const initialState = {
  weatherCities: [],
  isFetching: false
}

export const weatherReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload.status
      }
    case SET_WEATHER_DATA:
      return {
        ...state,
        weatherCities: action.payload.weatherCities,
        isFetching: false
      }
    default:
      return state;
  }
}