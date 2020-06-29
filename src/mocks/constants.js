import Offer from '../data/offer';
import OfferHost from '../data/offer-host';
import OfferLocation from '../data/offer-location';
import {OFFER_TYPES, OFFER_LUXURY_TYPE} from '../data/constants';

export const OFFER_DETAILS_IMAGES = [
  `img/room.jpg`,
  `img/apartment-01.jpg`,
  `img/apartment-02.jpg`,
  `img/apartment-03.jpg`,
  `img/studio-01.jpg`,
  `img/apartment-01.jpg`
];

export const DEFAULT_CAPACITY = {
  bedRoomsCount: 3,
  adultsCount: 4
};

export const DEFAULT_FEATURES = [
  `Wi-Fi`,
  `Washing machine`,
  `Towels`,
  `Heating`,
  `Coffee machine`,
  `Baby seat`,
  `Kitchen`,
  `Dishwasher`,
  `Cabel TV`,
  `Fridge`,
];

export const HOSTS = {
  ANGELINA: new OfferHost(`Angelina`, `img/avatar-angelina.jpg`, true)
};

export const DEFAULT_DESCRIPTION = `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`;

export const REVIEWS = [
  {
    reviewText: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    date: new Date(`2019-04-24`),
    rating: 4,
    user: {
      id: `bfaa6ec6-015f-4360-bf7e-ea80a378963f`,
      name: `Max`,
      imageUrl: `img/avatar-max.jpg`,
      isPro: false
    }
  }
];

export const NEAR_PLACES = [
  new Offer(2, `Wood and stone place`, OFFER_TYPES.PRIVATE_ROOM, OFFER_LUXURY_TYPE.NONE, 80, 3.2, true,
      OFFER_DETAILS_IMAGES, DEFAULT_CAPACITY, DEFAULT_FEATURES, HOSTS.ANGELINA, new OfferLocation(`Amsterdam`, 52.369553943508, 4.85309666406198),
      DEFAULT_DESCRIPTION, REVIEWS),
  new Offer(3, `Canal View Prinsengracht`, OFFER_TYPES.PRIVATE_ROOM, OFFER_LUXURY_TYPE.NONE, 132, 4.1, false,
      OFFER_DETAILS_IMAGES, DEFAULT_CAPACITY, DEFAULT_FEATURES, HOSTS.ANGELINA, new OfferLocation(`Amsterdam`, 52.3909553943508, 4.929309666406198),
      DEFAULT_DESCRIPTION, REVIEWS),
  new Offer(4, `Nice, cozy, warm big bed apartment`, OFFER_TYPES.APARTMENT, OFFER_LUXURY_TYPE.NONE, 180, 5, true,
      OFFER_DETAILS_IMAGES, DEFAULT_CAPACITY, DEFAULT_FEATURES, HOSTS.ANGELINA, new OfferLocation(`Amsterdam`, 52.3809553943508, 4.939309666406198),
      DEFAULT_DESCRIPTION, REVIEWS),
  new Offer(5, `Wood and stone place`, OFFER_TYPES.APARTMENT, OFFER_LUXURY_TYPE.NONE, 80, 2.7, false,
      OFFER_DETAILS_IMAGES, DEFAULT_CAPACITY, DEFAULT_FEATURES, HOSTS.ANGELINA, new OfferLocation(`Amsterdam`, 52.3819553943508, 4.939319666406198),
      DEFAULT_DESCRIPTION, REVIEWS),
];

