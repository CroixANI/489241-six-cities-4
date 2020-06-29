import React from 'react';
import PropTypes from 'prop-types';

import Map from '../map/map.jsx';

const OfferMap = (props) => {
  const className = `property__map ${props.className || ``}`;
  const restProps = Object.assign({}, props);
  delete restProps.className;

  return (
    <Map className={className} {...restProps} />
  );
};

OfferMap.propTypes = {
  className: PropTypes.string,
  locations: PropTypes.arrayOf(PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
  })).isRequired
};

export default OfferMap;
