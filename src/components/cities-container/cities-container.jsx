import React from "react";
import PropTypes from 'prop-types';

const CitiesContainer = (props) => {
  const {cities} = props;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
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
