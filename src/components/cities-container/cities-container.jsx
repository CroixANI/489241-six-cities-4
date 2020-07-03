import React from "react";
import PropTypes from 'prop-types';

const MAX_CITIES_COUNT = 6;

const CitiesContainer = (props) => {
  const {cities} = props;
  const limitedCities = cities.sort().slice(0, MAX_CITIES_COUNT);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {limitedCities.map((city) => (
            <li key={city} className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
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
  cities: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default CitiesContainer;
