import Offer from '../data/offer';
import OfferLocation from '../data/offer-location';
import {OFFER_TYPES, OFFER_LUXURY_TYPE} from '../data/constants';
import {OFFER_DETAILS_IMAGES, DEFAULT_CAPACITY, DEFAULT_FEATURES, HOSTS,
  DEFAULT_DESCRIPTION, REVIEWS, NEAR_PLACES} from './constants';

const OFFERS = [
  new Offer(1, `Beautiful & luxurious apartment at great location`, OFFER_TYPES.APARTMENT, OFFER_LUXURY_TYPE.PREMIUM, 120, 4.8, false,
      OFFER_DETAILS_IMAGES, DEFAULT_CAPACITY, DEFAULT_FEATURES, HOSTS.ANGELINA, new OfferLocation(`Amsterdam`, 52.3909553943508, 4.85309666406198),
      DEFAULT_DESCRIPTION, REVIEWS, NEAR_PLACES),
  new Offer(2, `Wood and stone place`, OFFER_TYPES.PRIVATE_ROOM, OFFER_LUXURY_TYPE.NONE, 80, 3.2, true,
      OFFER_DETAILS_IMAGES, DEFAULT_CAPACITY, DEFAULT_FEATURES, HOSTS.ANGELINA, new OfferLocation(`Amsterdam`, 52.369553943508, 4.85309666406198),
      DEFAULT_DESCRIPTION, REVIEWS, NEAR_PLACES),
  new Offer(3, `Canal View Prinsengracht`, OFFER_TYPES.PRIVATE_ROOM, OFFER_LUXURY_TYPE.NONE, 132, 4.1, false,
      OFFER_DETAILS_IMAGES, DEFAULT_CAPACITY, DEFAULT_FEATURES, HOSTS.ANGELINA, new OfferLocation(`Amsterdam`, 52.3909553943508, 4.929309666406198),
      DEFAULT_DESCRIPTION, REVIEWS, NEAR_PLACES),
  new Offer(4, `Nice, cozy, warm big bed apartment`, OFFER_TYPES.APARTMENT, OFFER_LUXURY_TYPE.NONE, 180, 5, true,
      OFFER_DETAILS_IMAGES, DEFAULT_CAPACITY, DEFAULT_FEATURES, HOSTS.ANGELINA, new OfferLocation(`Amsterdam`, 52.3809553943508, 4.939309666406198),
      DEFAULT_DESCRIPTION, REVIEWS, NEAR_PLACES),
  new Offer(5, `Wood and stone place`, OFFER_TYPES.APARTMENT, OFFER_LUXURY_TYPE.NONE, 80, 2.7, false,
      OFFER_DETAILS_IMAGES, DEFAULT_CAPACITY, DEFAULT_FEATURES, HOSTS.ANGELINA, new OfferLocation(`Amsterdam`, 52.3819553943508, 4.939319666406198),
      DEFAULT_DESCRIPTION, REVIEWS, NEAR_PLACES),

  new Offer(6, `Bed in 8 Bed Dorm`, OFFER_TYPES.PRIVATE_ROOM, OFFER_LUXURY_TYPE.NONE, 43, 4.4, false,
      OFFER_DETAILS_IMAGES, DEFAULT_CAPACITY, DEFAULT_FEATURES, HOSTS.ANGELINA, new OfferLocation(`Paris`, 52.3819553943508, 4.939309666406198),
      DEFAULT_DESCRIPTION, REVIEWS, NEAR_PLACES),
  new Offer(7, `Bedroom Paris, close to Montmartre - Gare du Nord`, OFFER_TYPES.APARTMENT, OFFER_LUXURY_TYPE.NONE, 201, 3.9, true,
      OFFER_DETAILS_IMAGES, DEFAULT_CAPACITY, DEFAULT_FEATURES, HOSTS.ANGELINA, new OfferLocation(`Paris`, 52.3829553943508, 4.939309666406198),
      DEFAULT_DESCRIPTION, REVIEWS, NEAR_PLACES),
  new Offer(8, `Appartement Cosy refait à neuf !`, OFFER_TYPES.APARTMENT, OFFER_LUXURY_TYPE.NONE, 179, 3.4, true,
      OFFER_DETAILS_IMAGES, DEFAULT_CAPACITY, DEFAULT_FEATURES, HOSTS.ANGELINA, new OfferLocation(`Paris`, 52.3839553943508, 4.939309666406198),
      DEFAULT_DESCRIPTION, REVIEWS, NEAR_PLACES),
  new Offer(9, `La Castellane`, OFFER_TYPES.APARTMENT, OFFER_LUXURY_TYPE.NONE, 500, 5, true,
      OFFER_DETAILS_IMAGES, DEFAULT_CAPACITY, DEFAULT_FEATURES, HOSTS.ANGELINA, new OfferLocation(`Paris`, 52.3849553943508, 4.939309666406198),
      DEFAULT_DESCRIPTION, REVIEWS, NEAR_PLACES),
  new Offer(10, `Stone place`, OFFER_TYPES.PRIVATE_ROOM, OFFER_LUXURY_TYPE.NONE, 30, 2.6, false,
      OFFER_DETAILS_IMAGES, DEFAULT_CAPACITY, DEFAULT_FEATURES, HOSTS.ANGELINA, new OfferLocation(`Paris`, 52.3859553943508, 4.939309666406198),
      DEFAULT_DESCRIPTION, REVIEWS, NEAR_PLACES),

  new Offer(11, `Modernes Apartment im beliebten Belgischen Viertel`, OFFER_TYPES.PRIVATE_ROOM, OFFER_LUXURY_TYPE.NONE, 51, 4.1, false,
      OFFER_DETAILS_IMAGES, DEFAULT_CAPACITY, DEFAULT_FEATURES, HOSTS.ANGELINA, new OfferLocation(`Cologne`, 52.3849553943508, 4.939309666406198),
      DEFAULT_DESCRIPTION, REVIEWS, NEAR_PLACES),
  new Offer(12, `Mdn 3Bed Apt`, OFFER_TYPES.APARTMENT, OFFER_LUXURY_TYPE.NONE, 94, 3.5, true,
      OFFER_DETAILS_IMAGES, DEFAULT_CAPACITY, DEFAULT_FEATURES, HOSTS.ANGELINA, new OfferLocation(`Cologne`, 52.3849553943508, 4.939309666406198),
      DEFAULT_DESCRIPTION, REVIEWS, NEAR_PLACES),

  new Offer(13, `Bruxelles plein centre`, OFFER_TYPES.PRIVATE_ROOM, OFFER_LUXURY_TYPE.NONE, 44, 4, false,
      OFFER_DETAILS_IMAGES, DEFAULT_CAPACITY, DEFAULT_FEATURES, HOSTS.ANGELINA, new OfferLocation(`Hamburg`, 52.3849553943508, 4.939309666406198),
      DEFAULT_DESCRIPTION, REVIEWS, NEAR_PLACES),
  new Offer(14, `Smartflats Monnaie 301 - Duplex 2Bedrooms - Center`, OFFER_TYPES.APARTMENT, OFFER_LUXURY_TYPE.NONE, 101, 3, true,
      OFFER_DETAILS_IMAGES, DEFAULT_CAPACITY, DEFAULT_FEATURES, HOSTS.ANGELINA, new OfferLocation(`Hamburg`, 52.3849553943508, 4.939309666406198),
      DEFAULT_DESCRIPTION, REVIEWS, NEAR_PLACES),

  new Offer(15, `Privatzimmer in HH-Hamm. Schlafen wie ein König`, OFFER_TYPES.PRIVATE_ROOM, OFFER_LUXURY_TYPE.NONE, 44, 4, false,
      OFFER_DETAILS_IMAGES, DEFAULT_CAPACITY, DEFAULT_FEATURES, HOSTS.ANGELINA, new OfferLocation(`Düsseldorf`, 52.3849553943508, 4.939309666406198),
      DEFAULT_DESCRIPTION, REVIEWS, NEAR_PLACES),
  new Offer(16, `Generator - Deluxe King`, OFFER_TYPES.APARTMENT, OFFER_LUXURY_TYPE.NONE, 81, 3, true,
      OFFER_DETAILS_IMAGES, DEFAULT_CAPACITY, DEFAULT_FEATURES, HOSTS.ANGELINA, new OfferLocation(`Düsseldorf`, 52.3849553943508, 4.939309666406198),
      DEFAULT_DESCRIPTION, REVIEWS, NEAR_PLACES),

  new Offer(17, `Ruhiges Appartment in Düsseldorf-Unterbilk`, OFFER_TYPES.PRIVATE_ROOM, OFFER_LUXURY_TYPE.NONE, 35, 4, false,
      OFFER_DETAILS_IMAGES, DEFAULT_CAPACITY, DEFAULT_FEATURES, HOSTS.ANGELINA, new OfferLocation(`Brussels`, 52.3849553943508, 4.939309666406198),
      DEFAULT_DESCRIPTION, REVIEWS, NEAR_PLACES),
  new Offer(18, `Heart of Dus with balcony- charming flat`, OFFER_TYPES.APARTMENT, OFFER_LUXURY_TYPE.NONE, 81, 3, true,
      OFFER_DETAILS_IMAGES, DEFAULT_CAPACITY, DEFAULT_FEATURES, HOSTS.ANGELINA, new OfferLocation(`Brussels`, 52.3849553943508, 4.939309666406198),
      DEFAULT_DESCRIPTION)
];

export default OFFERS;
