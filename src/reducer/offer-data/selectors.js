import NameSpace from '../name-space';

const NAME_SPACE = NameSpace.REVIEWS;

export const getReviews = (state) =>
  state[NAME_SPACE].reviews;

export const getIsActionInProgress = (state) =>
  state[NAME_SPACE].isActionInProgress;

