import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {OperationCreator, ActionCreator} from '../../reducer/offer-data/offer-data';
import {getCurrentReview} from '../../reducer/offer-data/selectors';
import {getCurrentOfferId} from '../../reducer/app/selectors.js';

class ReviewForm extends PureComponent {
  constructor(props) {
    super(props);

    this.formRef = createRef();

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleInputsChange = this._handleInputsChange.bind(this);
  }

  _handleInputsChange(evt) {
    evt.stopPropagation();

    const {onCurrentReviewChange} = this.props;

    onCurrentReviewChange({
      rating: this.formRef.current.rating.value,
      reviewText: this.formRef.current.review.value,
      isValid: this.formRef.current.checkValidity(),
    });
  }

  _handleSubmit(evt) {
    const {currentOfferId, onReviewSubmit} = this.props;

    evt.preventDefault();

    const isFormValid = this.formRef.current.checkValidity();
    if (isFormValid === true) {
      onReviewSubmit(currentOfferId, {
        rating: this.formRef.current.rating.value,
        reviewText: this.formRef.current.review.value,
      });
    }
  }

  render() {
    const {currentReview} = this.props;
    return (
      <form className="reviews__form form" action="#" method="post"
        onSubmit={this._handleSubmit} ref={this.formRef} disabled={currentReview.isSubmitInProgress}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"
            required={true} checked={currentReview.rating === `5`} onChange={this._handleInputsChange}
            disabled={currentReview.isSubmitInProgress} />
          <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"
            required={true} checked={currentReview.rating === `4`} onChange={this._handleInputsChange}
            disabled={currentReview.isSubmitInProgress} />
          <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"
            required={true} checked={currentReview.rating === `3`} onChange={this._handleInputsChange}
            disabled={currentReview.isSubmitInProgress} />
          <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"
            required={true} checked={currentReview.rating === `2`} onChange={this._handleInputsChange}
            disabled={currentReview.isSubmitInProgress} />
          <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"
            required={true} checked={currentReview.rating === `1`} onChange={this._handleInputsChange}
            disabled={currentReview.isSubmitInProgress} />
          <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </div>
        <textarea className="reviews__textarea form__textarea" id="review" name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          minLength="50" maxLength="300" required={true} onChange={this._handleInputsChange}
          value={currentReview.reviewText} disabled={currentReview.isSubmitInProgress}></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled={currentReview.isValid !== true}>Submit</button>
        </div>
      </form>
    );
  }
}

ReviewForm.propTypes = {
  currentOfferId: PropTypes.number.isRequired,
  onReviewSubmit: PropTypes.func.isRequired,
  onCurrentReviewChange: PropTypes.func.isRequired,
  currentReview: PropTypes.shape({
    reviewText: PropTypes.string,
    rating: PropTypes.string,
    isValid: PropTypes.bool.isRequired,
    isSubmitInProgress: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  currentReview: getCurrentReview(state),
  currentOfferId: getCurrentOfferId(state),
});

const mapDispatchToProps = (dispatch) => ({
  onReviewSubmit(offerId, reviewData) {
    dispatch(OperationCreator.submitReview(offerId, reviewData));
  },
  onCurrentReviewChange(reviewData) {
    dispatch(ActionCreator.setCurrentReview(reviewData));
  },
});

export {ReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
