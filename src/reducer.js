import {OFFERS} from './mocks/offers';

const initialState = {
  city: `Amsterdam`,
  offers: OFFERS
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  LIST_OFFERS: `LIST_OFFERS`
};

const reducer = (state = initialState, action) => {
  return state;
};

export default reducer;
