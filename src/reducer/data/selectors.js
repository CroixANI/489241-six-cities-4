import NameSpace from '../name-space';

const NAME_SPACE = NameSpace.DATA;

export const getOffers = (state) =>
  state[NAME_SPACE].offers;

export const getCities = (state) =>
  state[NAME_SPACE].cities;

