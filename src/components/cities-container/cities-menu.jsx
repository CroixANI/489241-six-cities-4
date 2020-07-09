import React from "react";
import PropTypes from 'prop-types';

import CitiesContainer from './cities-container.jsx';
import withSelectableOption from '../../hocs/with-select-option/with-select-option.jsx';

const MAX_CITIES_COUNT = 6;

const CitiesMenu = (props) => {
  const {cities, selectedCity, onCityClick} = props;
  // to test empty screen
  const limitedCities = [`Düsseldorf`, ...cities].sort().slice(0, MAX_CITIES_COUNT);

  const WrappedComponent = withSelectableOption(CitiesContainer, limitedCities, selectedCity, onCityClick);

  return <WrappedComponent />;
};

CitiesMenu.propTypes = {
  onCityClick: PropTypes.func.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCity: PropTypes.string.isRequired
};

export default CitiesMenu;
