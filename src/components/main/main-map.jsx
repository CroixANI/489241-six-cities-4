import React from 'react';
import PropTypes from 'prop-types';

import Map from '../map/map.jsx';

const MainMap = (props) => {
  const className = `cities__map ${props.className || ``}`;
  const restProps = Object.assign({}, props);
  delete restProps.className;

  return (
    <Map className={className} {...restProps} />
  );
};

MainMap.propTypes = {
  className: PropTypes.string,
  locations: PropTypes.arrayOf(PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
  })).isRequired
};

export default MainMap;
