import { getWeatherCities } from './weather.gateway';

export const SET_IS_FETCHING = 'WEATHER/SET_IS_FETCHING';
export const SET_WEATHER_DATA = 'WEATHER/SET_WEATHER_DATA';

export const setIsFetching = (status) => ({ type: SET_IS_FETCHING, payload: { status }});
export const setWeatherCities = (weatherCities) => ({ type: SET_WEATHER_DATA, payload: { weatherCities }});

export const fetchWeatherCities = () => async (dispatch) => {
  try {
    dispatch(setIsFetching(true));
    const weatherCities = await getWeatherCities();
    dispatch(setWeatherCities(weatherCities));
  } catch (err) {
    alert(err.message);
  }
}