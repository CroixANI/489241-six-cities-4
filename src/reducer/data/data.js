import {createOffer} from '../../data/offer';
import {getCities} from './selectors';
import {ActionCreator as AppActionCreator} from '../app/app';

const initialState = {
  cities: [],
  offers: [],
};

const ActionType = {
  LOAD_DATA: `LOAD_DATA`,
};

const ActionCreator = {
  loadData: (offers) => ({
    type: ActionType.LOAD_DATA,
    payload: offers
  }),
};

const OperationCreator = {
  loadHotels: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        const offers = response.data.map((offerData) => createOffer(offerData));
        dispatch(ActionCreator.loadData(offers));
        const cities = getCities(getState());
        if (cities && cities.length > 0) {
          dispatch(AppActionCreator.changeCity(cities[0]));
        }
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
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, OperationCreator};
