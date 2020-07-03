import React from "react";
import PropTypes from 'prop-types';

const MAX_CITIES_COUNT = 6;

const CitiesContainer = (props) => {
  const {cities, selectedCity, onCityClick} = props;
  const limitedCities = cities.slice(0, MAX_CITIES_COUNT);
  const defaultCityClass = `locations__item-link tabs__item`;
  const activeCityClass = `${defaultCityClass} tabs__item--active`;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {limitedCities.map((city) => (
            <li key={city} className="locations__item">
              <a className={city === selectedCity ? activeCityClass : defaultCityClass} href="#"
                onClick={() => {
                  onCityClick(city);
                }}>
                <span>{city}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

CitiesContainer.propTypes = {
  onCityClick: PropTypes.func.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCity: PropTypes.string.isRequired
};

export default CitiesContainer;
