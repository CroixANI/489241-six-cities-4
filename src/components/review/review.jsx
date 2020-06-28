import React from 'react';
import PropTypes from 'prop-types';

const Review = (props) => {
  const {review} = props;

  return (
    <>
    <div className="reviews__user user">
      <div className="reviews__avatar-wrapper user__avatar-wrapper">
        <img className="reviews__avatar user__avatar" src={review.user.imageUrl} width="54" height="54" alt="Reviews avatar" />
      </div>
      <span className="reviews__user-name">
        {review.user.name}
      </span>
    </div>
    <div className="reviews__info">
      <div className="reviews__rating rating">
        <div className="reviews__stars rating__stars">
          <span style={{width: `80%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <p className="reviews__text">
        {review.review}
      </p>
      <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
    </div>
    </>
  );
};

Review.propTypes = {
  review: PropTypes.shape({
    review: PropTypes.string.isRequired,
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
