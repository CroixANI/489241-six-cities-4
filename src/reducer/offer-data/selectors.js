import NameSpace from '../name-space';

const NAME_SPACE = NameSpace.OFFER_DATA;

export const getReviews = (state) =>
  state[NAME_SPACE].reviews;

export const getCurrentReview = (state) =>
  state[NAME_SPACE].currentReview;

export const getNearBy = (state) =>
  state[NAME_SPACE].nearBy;
