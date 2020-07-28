import {createSelector} from 'reselect';

import {SORT_TYPE} from '../../data/constants';
import {getOffers, getCities} from '../data/selectors';
import NameSpace from '../name-space';

const NAME_SPACE = NameSpace.APP;

export const getSortType = (state) =>
  state[NAME_SPACE].sortType || SORT_TYPE.POPULAR;

export const getCity = (state) => {
  const city = state[NAME_SPACE].city;
  if (city) {
    return city;
  }

  const cities = getCities(state);
  if (cities && cities.length > 0) {
    return cities[0].name;
  }

  return ``;
};

export const getCurrentOfferId = (state) =>
  state[NAME_SPACE].currentOfferId;

export const getCurrentOffer = createSelector(
    getCurrentOfferId,
    getOffers,
    (offerId, offers) => offers.find((offer) => offer.id === offerId));

export const getFilteredOffers = createSelector(
    getCity,
    getOffers,
    (currentCity, offers) => offers.filter((offer) => offer.location.city.name === currentCity));

const sortOffers = (offers, sortType) => {
  const copyOffers = [...offers];

  switch (sortType) {
    case SORT_TYPE.PRICE_HIGH_TO_LOW:
      return copyOffers.sort((a, b) => b.price - a.price);
    case SORT_TYPE.PRICE_LOW_TO_HIGH:
      return copyOffers.sort((a, b) => a.price - b.price);
    case SORT_TYPE.TOP_RATED:
      return copyOffers.sort((a, b) => b.rating - a.rating);
  }

  return offers;
};

export const getSortedOffers = createSelector(
    getSortType,
    getFilteredOffers,
    (sortType, filteredOffers) => sortOffers(filteredOffers, sortType));

export const getErrorMessage = (state) =>
  state[NAME_SPACE].errorMessage;
