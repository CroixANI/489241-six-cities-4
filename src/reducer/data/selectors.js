import NameSpace from '../name-space';
import {createSelector} from 'reselect';

const NAME_SPACE = NameSpace.DATA;

export const getOffers = (state) =>
  state[NAME_SPACE].offers;

export const getCities = (state) =>
  state[NAME_SPACE].cities;

export const getBookmarkedOffers = createSelector(
    getOffers,
    (offers) => offers.filter((offer) => offer.isBookmarked));
