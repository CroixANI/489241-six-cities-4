import {createOffer} from '../../data/offer';
import {createOfferReview} from '../../data/offer-review';
import {ActionCreator as AppActionCreator} from '../app/app';

const initialState = {
  reviews: [],
  nearBy: [],
  currentReview: {
    reviewText: ``,
    rating: ``,
    isValid: false,
    isSubmitInProgress: false,
  }
};

const ActionType = {
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  LOAD_NEAR_BY: `LOAD_NEAR_BY`,
  SET_IN_PROGRESS: `SET_IN_PROGRESS`,
  SET_CURRENT_REVIEW: `SET_CURRENT_REVIEW`,
};

const ActionCreator = {
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews
  }),
  loadNearBy: (nearBy) => ({
    type: ActionType.LOAD_NEAR_BY,
    payload: nearBy
  }),
  setInProgress: (isActionInProgress) => ({
    type: ActionType.SET_IN_PROGRESS,
    payload: isActionInProgress
  }),
  setCurrentReview: (reviewData) => ({
    type: ActionType.SET_CURRENT_REVIEW,
    payload: reviewData || {
      reviewText: ``,
      rating: ``,
      isValid: false,
      isSubmitInProgress: false,
    }
  })
};

const OperationCreator = {
  loadReviews: (offerId) => (dispatch, getState, api) => {
    return api.get(`/comments/${offerId}`)
      .then((response) => {
        if (!Array.isArray(response.data)) {
          return;
        }

        const reviews = response.data.map((review) => createOfferReview(review));
        dispatch(ActionCreator.loadReviews(reviews));
      })
      .catch((err) => {
        dispatch(AppActionCreator.setErrorMessage(`Unable to load reviews`));
        throw err;
      });
  },
  loadNearBy: (offerId) => (dispatch, getState, api) => {
    return api.get(`/hotels/${offerId}/nearby`)
      .then((response) => {
        if (!Array.isArray(response.data)) {
          return;
        }

        const offers = response.data.map((offer) => createOffer(offer));
        dispatch(ActionCreator.loadNearBy(offers));
      })
      .catch((err) => {
        dispatch(AppActionCreator.setErrorMessage(`Unable to load near by hotels`));
        throw err;
      });
  },
  submitReview: (offerId, reviewData) => (dispatch, getState, api) => {
    dispatch(ActionCreator.setInProgress(true));
    return api.post(`/comments/${offerId}`, {
      comment: reviewData.reviewText,
      rating: reviewData.rating,
    }).then((response) => {
      if (!Array.isArray(response.data)) {
        return;
      }

      const reviews = response.data.map((review) => createOfferReview(review));
      dispatch(ActionCreator.loadReviews(reviews));
      dispatch(ActionCreator.setCurrentReview(null));
      dispatch(ActionCreator.setInProgress(false));
    }).catch((err) => {
      dispatch(ActionCreator.setCurrentReview(reviewData));
      dispatch(ActionCreator.setInProgress(false));
      dispatch(AppActionCreator.setErrorMessage(`Unable to submit review`));
      throw err;
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_REVIEWS:
      return Object.assign({}, state, {
        reviews: action.payload,
      });
    case ActionType.LOAD_NEAR_BY:
      return Object.assign({}, state, {
        nearBy: action.payload,
      });
    case ActionType.SET_IN_PROGRESS:
      return Object.assign({}, state, {
        currentReview: Object.assign({}, state.currentReview, {
          isSubmitInProgress: action.payload,
        })
      });
    case ActionType.SET_CURRENT_REVIEW:
      return Object.assign({}, state, {
        currentReview: Object.assign({}, state.currentReview, action.payload)
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, OperationCreator};
