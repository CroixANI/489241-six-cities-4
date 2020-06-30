import React from 'react';
import PropTypes from 'prop-types';

const countWidth = (rating) => {
  const roundRating = Math.round(rating);
  return Math.round((100 * roundRating) / 5);
};

const Rating = (props) => {
  const {rating, className} = props;
  const ratingWidth = countWidth(rating);
  const fullClassName = `${className || ``} rating__stars`;

  return (
    <div className={fullClassName}>
      <span style={{width: `${ratingWidth}%`}}></span>
      <span className="visually-hidden">Rating</span>
    </div>
  );
};

Rating.propTypes = {
  className: PropTypes.string,
  rating: PropTypes.number.isRequired
};

export default Rating;
