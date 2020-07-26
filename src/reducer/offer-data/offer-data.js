import {createOffer} from '../../data/offer';
import {createOfferReview} from '../../data/offer-review';

const initialState = {
  reviews: [],
  nearBy: [],
  isActionInProgress: false,
};

const ActionType = {
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  LOAD_NEAR_BY: `LOAD_NEAR_BY`,
  SET_IN_PROGRESS: `SET_IN_PROGRESS`,
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
};

const OperationCreator = {
  loadReviews: (offerId) => (dispatch, getState, api) => {
    return api.get(`/comments/${offerId}`)
      .then((response) => {
        const reviews = response.data.map((review) => createOfferReview(review));
        dispatch(ActionCreator.loadReviews(reviews));
      });
  },
  loadNearBy: (offerId) => (dispatch, getState, api) => {
    return api.get(`/hotels/${offerId}/nearby`)
      .then((response) => {
        const offers = response.data.map((offer) => createOffer(offer));
        dispatch(ActionCreator.loadNearBy(offers));
      });
  },
  submitReview: (offerId, reviewData) => (dispatch, getState, api) => {
    dispatch(ActionCreator.setInProgress(true));
    return api.post(`/comments/${offerId}`, {
      comment: reviewData.reviewText,
      rating: reviewData.rating,
    }).then(() => {
      dispatch(ActionCreator.setInProgress(true));
    }).error(() => {
      dispatch(ActionCreator.setInProgress(true));
      // TODO - Show error
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
        isActionInProgress: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, OperationCreator};
