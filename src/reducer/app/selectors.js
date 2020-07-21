import NameSpace from '../name-space';

const NAME_SPACE = NameSpace.APP;

export const getCity = (state) =>
  state[NAME_SPACE].city;

export const getCurrentOfferId = (state) =>
  state[NAME_SPACE].currentOfferId;

export const getFilteredOffers = (state) =>
  state[NAME_SPACE].filteredOffers;
