import React from "react";
import PropTypes from 'prop-types';

const CitiesContainer = (props) => {
  const {items, activeItem, onItemSelected} = props;
  const defaultCityClass = `locations__item-link tabs__item`;
  const activeCityClass = `${defaultCityClass} tabs__item--active`;

  const handleCityClick = (city) => () => {
    onItemSelected(city);
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {items.map((city) => (
            <li key={city} className="locations__item">
              <a className={city === activeItem ? activeCityClass : defaultCityClass} href="#"
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
  onItemSelected: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeItem: PropTypes.string.isRequired
};

export default CitiesContainer;
