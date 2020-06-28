import React from 'react';
import PropTypes from 'prop-types';

const countWidth = (rating) => {
  const roundRating = Math.round(rating);
  return Math.round((100 * roundRating) / 5);
};

const Rating = (props) => {
  const {rating} = props;
  const ratingWidth = countWidth(rating);

  return (
    <div className="place-card__stars rating__stars">
      <span style={{width: `${ratingWidth}%`}}></span>
      <span className="visually-hidden">Rating</span>
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired
};

export default Rating;
