import React from "react";
import PropTypes from 'prop-types';

import CitiesContainer from './cities-container.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item.jsx';

const MAX_CITIES_COUNT = 6;

const CitiesMenu = (props) => {
  const {cities, selectedCity, onCityClick} = props;
  // to test empty screen
  const limitedCities = [`Düsseldorf`, ...cities].sort().slice(0, MAX_CITIES_COUNT);

  const WrappedComponent = withActiveItem(CitiesContainer);

  return <WrappedComponent items={limitedCities} activeItem={selectedCity} onItemSelected={onCityClick} {...props} />;
};

CitiesMenu.propTypes = {
  onCityClick: PropTypes.func.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCity: PropTypes.string.isRequired
};

export default CitiesMenu;
