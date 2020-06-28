import React from 'react';
import PropTypes from 'prop-types';

import Rating from '../rating/rating.jsx';

const ReviewRating = (props) => {
  const className = `reviews__stars ${props.className || ``}`;
  const restProps = Object.assign({}, props);
  delete restProps.className;

  return (
    <Rating className={className} {...restProps} />
  );
};

ReviewRating.propTypes = {
  className: PropTypes.string,
  rating: PropTypes.number.isRequired
};

export default ReviewRating;
