import NameSpace from '../name-space';

const NAME_SPACE = NameSpace.OFFER_DATA;

export const getReviews = (state) =>
  state[NAME_SPACE].reviews;

export const getNearBy = (state) =>
  state[NAME_SPACE].nearBy;

export const getIsActionInProgress = (state) =>
  state[NAME_SPACE].isActionInProgress;

