import React from "react";
import PropTypes from 'prop-types';

const CitiesContainer = (props) => {
  const {options, activeOption, onOptionSelected} = props;
  const defaultCityClass = `locations__item-link tabs__item`;
  const activeCityClass = `${defaultCityClass} tabs__item--active`;

  const handleCityClick = (city) => () => {
    onOptionSelected(city);
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {options.map((city) => (
            <li key={city} className="locations__item">
              <a className={city === activeOption ? activeCityClass : defaultCityClass} href="#"
                onClick={handleCityClick(city)}>
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
  onOptionSelected: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeOption: PropTypes.string.isRequired
};

export default CitiesContainer;
