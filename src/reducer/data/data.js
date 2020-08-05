import {createOffer} from '../../data/offer';
import {getCities, getOffers} from './selectors';
import {ActionCreator as AppActionCreator} from '../app/app';

const initialState = {
  cities: [],
  offers: [],
  isDataLoaded: false
};

const ActionType = {
  LOAD_DATA: `LOAD_DATA`,
  UPDATE_OFFER: `UPDATE_OFFER`
};

const ActionCreator = {
  loadData: (offers) => ({
    type: ActionType.LOAD_DATA,
    payload: offers
  }),
  updateOfferInState: (offer) => ({
    type: ActionType.UPDATE_OFFER,
    payload: offer
  })
};

const OperationCreator = {
  loadHotels: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        if (!Array.isArray(response.data)) {
          return;
        }

        const offers = response.data.map((offerData) => createOffer(offerData));
        dispatch(ActionCreator.loadData(offers));
        const cities = getCities(getState());
        if (cities && cities.length > 0) {
          dispatch(AppActionCreator.changeCity(cities[0]));
        }
      });
  },
  toggleFavoriteFlag: (offer) => (dispatch, getState, api) => {
    const newStatus = offer.isBookmarked ? 0 : 1;
    return api.post(`/favorite/${offer.id}/${newStatus}`)
      .then((response) => {
        const updatedOffer = createOffer(response.data);
        dispatch(ActionCreator.updateOfferInState(updatedOffer));
        dispatch(AppActionCreator.setErrorMessage(null));
      })
      .catch(() => {
        const offers = getOffers(getState());
        dispatch(ActionCreator.loadData(offers));
        dispatch(AppActionCreator.setErrorMessage(`Unable to toggle favorites flag.`));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_DATA:
      const filteredCities = action.payload
          .map((offer) => offer.location.city.name)
          .filter((value, index, self) => self.indexOf(value) === index)
          .sort();

      return Object.assign({}, state, {
        cities: filteredCities,
        offers: action.payload,
        isDataLoaded: true
      });
    case ActionType.UPDATE_OFFER:
      return Object.assign({}, state, {
        offers: state.offers.map((offer) => {
          if (offer.id === action.payload.id) {
            return action.payload;
          }

          return offer;
        }),
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, OperationCreator};
