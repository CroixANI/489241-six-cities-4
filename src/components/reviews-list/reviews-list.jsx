import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Review from '../review/review.jsx';
import ReviewForm from '../review-form/review-form.jsx';
import {AuthorizationStatus} from '../../reducer/user/user';
import {getAuthorizationStatus} from '../../reducer/user/selectors';
import {getReviews} from '../../reducer/offer-data/selectors';

const MAX_REVIEW = 10;

const ReviewsList = (props) => {
  const {reviews, authorizationStatus, currentOfferId} = props;
  const limitedReviews = reviews
    .slice()
    .sort((firstReview, secondReview) => {
      return secondReview.date - firstReview.date;
    })
    .slice(0, MAX_REVIEW);

  const ReviewFormElement = authorizationStatus === AuthorizationStatus.AUTH
    ? <ReviewForm currentOfferId={currentOfferId} />
    : <></>;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{limitedReviews.length}</span></h2>
      <ul className="reviews__list">
        {limitedReviews.map((review) => (
          <li key={review.id} className="reviews__item">
            <Review review={review} />
          </li>
        ))}
      </ul>
      {ReviewFormElement}
    </section>
  );
};

ReviewsList.propTypes = {
  currentOfferId: PropTypes.number.isRequired,
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

const mapStateToProps = (state) => ({
  reviews: getReviews(state),
  authorizationStatus: getAuthorizationStatus(state),
});

export {ReviewsList};
export default connect(mapStateToProps)(ReviewsList);
