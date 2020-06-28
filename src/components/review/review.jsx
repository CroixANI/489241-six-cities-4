import React from 'react';
import PropTypes from 'prop-types';

import ReviewRating from './review-rating.jsx';

const formatDate = (date) => {
  const yearFormatted = new Intl.DateTimeFormat(`en`, {year: `numeric`}).format(date);
  const monthFormatted = new Intl.DateTimeFormat(`en`, {month: `long`}).format(date);
  const dayFormatted = new Intl.DateTimeFormat(`en`, {day: `2-digit`}).format(date);

  return `${monthFormatted} ${dayFormatted}, ${yearFormatted}`;
};

const Review = (props) => {
  const {review} = props;
  const {
    reviewText,
    rating,
    user,
    date
  } = review;

  const formattedDate = formatDate(date);

  return (
    <>
    <div className="reviews__user user">
      <div className="reviews__avatar-wrapper user__avatar-wrapper">
        <img className="reviews__avatar user__avatar" src={user.imageUrl} width="54" height="54" alt="Reviews avatar" />
      </div>
      <span className="reviews__user-name">
        {user.name}
      </span>
    </div>
    <div className="reviews__info">
      <div className="reviews__rating rating">
        <ReviewRating rating={rating} />
      </div>
      <p className="reviews__text">
        {reviewText}
      </p>
      <time className="reviews__time" dateTime={date}>{formattedDate}</time>
    </div>
    </>
  );
};

Review.propTypes = {
  review: PropTypes.shape({
    reviewText: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      isPro: PropTypes.bool.isRequired,
      imageUrl: PropTypes.string.isRequired
    }).isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  })
};

export default Review;
