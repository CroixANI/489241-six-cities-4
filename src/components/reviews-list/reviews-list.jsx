import React from 'react';
import PropTypes from 'prop-types';

import Review from '../review/review.jsx';
import ReviewForm from '../review-form/review-form.jsx';
import {AuthorizationStatus} from '../../reducer/user/user';

const MAX_REVIEW = 10;

const ReviewsList = (props) => {
  const {reviews, authorizationStatus, onReviewSubmit} = props;
  const limitedReviews = reviews.slice(0, MAX_REVIEW).sort((firstReview, secondReview) => {
    return secondReview.date - firstReview.date;
  });

  const ReviewFormElement = authorizationStatus === AuthorizationStatus.AUTH
    ? <ReviewForm onReviewSubmit={onReviewSubmit} />
    : <></>;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{limitedReviews.length}</span></h2>
      <ul className="reviews__list">
        {limitedReviews.map((review) => (
          <li key={review.user.id} className="reviews__item">
            <Review review={review} />
          </li>
        ))}
      </ul>
      {ReviewFormElement}
    </section>
  );
};

ReviewsList.propTypes = {
  onReviewSubmit: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    reviewText: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isPro: PropTypes.bool.isRequired,
      imageUrl: PropTypes.string.isRequired
    }).isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  })).isRequired
};

export default ReviewsList;
