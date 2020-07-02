import {OFFERS} from './mocks/offers';

const initialState = {
  city: ``,
  offers: []
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  LIST_OFFERS: `LIST_OFFERS`
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {
        city: action.payload
      });
    case ActionType.LIST_OFFERS:
      return Object.assign({}, state, {
        city: OFFERS.filter((offer) => offer.location.city === action.payload)
      });
  }

  return state;
};

export {reducer, ActionType};
