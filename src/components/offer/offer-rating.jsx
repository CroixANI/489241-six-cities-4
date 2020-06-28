import React from 'react';
import PropTypes from 'prop-types';

import Rating from '../rating/rating.jsx';

const OfferRating = (props) => {
  const className = `property__stars ${props.className || ``}`;
  const restProps = Object.assign({}, props);
  delete restProps.className;

  return (
    <Rating className={className} {...restProps} />
  );
};

OfferRating.propTypes = {
  className: PropTypes.string,
  rating: PropTypes.number.isRequired
};

export default OfferRating;
