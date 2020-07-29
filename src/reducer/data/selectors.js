import NameSpace from '../name-space';
import {createSelector} from 'reselect';
import OffersGroup from '../../data/offers-group';

const NAME_SPACE = NameSpace.DATA;

export const getOffers = (state) =>
  state[NAME_SPACE].offers;

export const getOfferById = (state, id) =>
  state[NAME_SPACE].offers.find((x) => x.id === id);

export const getCities = (state) =>
  state[NAME_SPACE].cities;

export const getIsDataLoaded = (state) =>
  state[NAME_SPACE].isDataLoaded;

export const getBookmarkedOffers = (state) =>
  state[NAME_SPACE].offers.filter((offer) => offer.isBookmarked);

export const getGroupedByCityOffers = createSelector(
    getBookmarkedOffers,
    (offers) => {
      return offers.reduce((totalArray, offer) => {
        const cityName = offer.location.city.name;
        let foundGroup = totalArray.find((x) => x.city === cityName);
        if (!foundGroup) {
          foundGroup = new OffersGroup(cityName);
          totalArray.push(foundGroup);
        }

        foundGroup.offers.push(offer);

        return totalArray;
      }, []);
    }
);
