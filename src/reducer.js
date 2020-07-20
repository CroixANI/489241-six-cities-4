import {createOffer} from './data/offer';
import {SORT_TYPE} from "./data/constants";

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  city: ``,
  currentOfferId: null,
  cities: [],
  filteredOffers: [],
  allOffers: [],
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  LIST_OFFERS: `LIST_OFFERS`,
  LOAD_DATA: `LOAD_DATA`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
  CHANGE_CURRENT_OFFER: `CHANGE_CURRENT_OFFER`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
};

const ActionCreator = {
  loadData: (offers) => ({
    type: ActionType.LOAD_DATA,
    payload: offers
  }),
  listOffers: () => ({
    type: ActionType.LIST_OFFERS
  }),
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  changeSortType: (sortType) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: sortType
  }),
  changeCurrentOffer: (offerId) => ({
    type: ActionType.CHANGE_CURRENT_OFFER,
    payload: offerId
  }),
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },
};

const OperationCreator = {
  loadHotels: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadData(response.data.map((offerData) => createOffer(offerData))));
      });
  }
};

const filterOffersByCity = (offers, city) =>
  offers.filter((offer) => offer.location.city.name === city);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_SORT_TYPE:
      return Object.assign({}, state, {
        sortType: action.payload
      });
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {
        city: action.payload
      });
    case ActionType.CHANGE_CURRENT_OFFER:
      return Object.assign({}, state, {
        currentOfferId: action.payload
      });
    case ActionType.LIST_OFFERS:
      return Object.assign({}, state, {
        filteredOffers: filterOffersByCity(state.allOffers, state.city)
      });
    case ActionType.LOAD_DATA:
      const filteredCities = action.payload
          .map((offer) => offer.location.city.name)
          .filter((value, index, self) => self.indexOf(value) === index)
          .sort();
      const city = filteredCities.length > 0 ? filteredCities[0] : ``;
      const filteredOffers = city.length > 0 ? filterOffersByCity(action.payload, city) : [];

      return Object.assign({}, state, {
        city,
        cities: filteredCities,
        allOffers: action.payload,
        filteredOffers,
        sortType: SORT_TYPE.POPULAR
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, OperationCreator, AuthorizationStatus};
