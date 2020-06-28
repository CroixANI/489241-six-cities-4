import React from 'react';
import PropTypes from 'prop-types';

import Rating from '../rating/rating.jsx';

const OfferCardRating = (props) => {
  const className = `place-card__stars ${props.className || ``}`;
  const restProps = Object.assign({}, props);
  delete restProps.className;

  return (
    <Rating className={className} {...restProps} />
  );
};

OfferCardRating.propTypes = {
  className: PropTypes.string,
  rating: PropTypes.number.isRequired
};

export default OfferCardRating;
