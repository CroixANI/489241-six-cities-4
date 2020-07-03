import OFFERS from './mocks/offers';
import {CITIES} from './mocks/constants';

const initialState = {
  city: ``,
  cities: CITIES,
  filteredOffers: [],
  allOffers: OFFERS
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
        filteredOffers: state.allOffers.filter((offer) => offer.location.city === state.city)
      });
  }

  return state;
};

export {reducer, ActionType};
