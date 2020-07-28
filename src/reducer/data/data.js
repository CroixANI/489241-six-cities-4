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
};

const ActionCreator = {
  loadData: (offers) => ({
    type: ActionType.LOAD_DATA,
    payload: offers
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
        offers[0].isBookmarked = true;
        offers[1].isBookmarked = true;
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
      .then(() => {
        const offers = getOffers(getState());
        const foundOffer = offers.find((x) => x.id === offer.id);
        foundOffer.isBookmarked = !offer.isBookmarked;
        dispatch(ActionCreator.loadData(offers));
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
  }

  return state;
};

export {reducer, ActionType, ActionCreator, OperationCreator};
