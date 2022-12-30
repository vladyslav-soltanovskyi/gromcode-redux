import React from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { fetchWeatherCities } from "./weather.actions";
import { isFetchingSelector, weatherCitiesSelector } from "./weather.selectors";
import Spinner from "./Spinner";

const Weather = ({ isFetching, weatherCities, fetchWeatherCities }) => {
  React.useEffect(() => {
    fetchWeatherCities();
  }, []);

  if (isFetching) {
    return <Spinner />;
  }

  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {weatherCities.map(({ id, name, temperature }) => (
          <li className="city" key={id}>
            <span className="city__name">{name}</span>
            <span className="city__temperature">{temperature} F</span>
          </li>
        ))}
      </ul>
    </main>
  );
}

Weather.propTypes = {
  isFetching: propTypes.bool.isRequired,
  weatherCities: propTypes.array.isRequired,
  fetchWeatherCities: propTypes.func.isRequired
}

const mapState = (state) => ({
  isFetching: isFetchingSelector(state),
  weatherCities: weatherCitiesSelector(state)
});

const mapDispatch = {
  fetchWeatherCities
}

export default connect(mapState, mapDispatch)(Weather);