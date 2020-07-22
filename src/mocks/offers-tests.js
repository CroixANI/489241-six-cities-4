import Offer from '../data/offer';
import OfferHost from '../data/offer-host';
import OfferLocation from '../data/offer-location';
import {OFFER_TYPES, OFFER_LUXURY_TYPE} from '../data/constants';

const OFFER_DETAILS_IMAGES = [
  `img/room.jpg`,
  `img/apartment-01.jpg`,
  `img/apartment-02.jpg`,
  `img/apartment-03.jpg`,
  `img/studio-01.jpg`,
  `img/apartment-01.jpg`
];

const DEFAULT_CAPACITY = {
  bedRoomsCount: 3,
  adultsCount: 4
};

const DEFAULT_FEATURES = [
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

const CITIES = {
  AMSTERDAM: {name: `Amsterdam`, location: {latitude: 52.370216, longitude: 4.895168, zoom: 10}},
  PARIS: {name: `Paris`, location: {latitude: 52.370216, longitude: 4.895168, zoom: 10}},
  COLOGNE: {name: `Cologne`, location: {latitude: 52.370216, longitude: 4.895168, zoom: 10}}
};

const HOSTS = {
  ANGELINA: new OfferHost(1, `Angelina`, `img/avatar-angelina.jpg`, true)
};

const DEFAULT_DESCRIPTION = `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`;

const REVIEWS = [
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
  },
  {
    reviewText: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    date: new Date(`2018-04-24`),
    rating: 3,
    user: {
      id: `cda78b3e-74be-4e31-8ada-9a4885baedac`,
      name: `Alex`,
      imageUrl: `img/avatar-max.jpg`,
      isPro: false
    }
  },
  {
    reviewText: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    date: new Date(`2019-05-24`),
    rating: 2,
    user: {
      id: `ccf25925-3f45-4aee-86e7-c9e3b0880f03`,
      name: `Adam`,
      imageUrl: `img/avatar-max.jpg`,
      isPro: true
    }
  },
  {
    reviewText: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    date: new Date(`2019-04-27`),
    rating: 5,
    user: {
      id: `8b939b62-6d8c-4405-b7d5-40f5532af5ca`,
      name: `Alice`,
      imageUrl: `img/avatar-max.jpg`,
      isPro: false
    }
  }
];

const NEAR_PLACES = [
  new Offer(2, `Wood and stone place`, OFFER_TYPES.PRIVATE_ROOM, OFFER_LUXURY_TYPE.NONE, 80, 3.2, true,
      OFFER_DETAILS_IMAGES[0], OFFER_DETAILS_IMAGES, DEFAULT_CAPACITY, DEFAULT_FEATURES, HOSTS.ANGELINA, new OfferLocation(CITIES.AMSTERDAM, 52.369553943508, 4.85309666406198, 8),
      DEFAULT_DESCRIPTION, REVIEWS),
  new Offer(3, `Canal View Prinsengracht`, OFFER_TYPES.PRIVATE_ROOM, OFFER_LUXURY_TYPE.NONE, 132, 4.1, false,
      OFFER_DETAILS_IMAGES[0], OFFER_DETAILS_IMAGES, DEFAULT_CAPACITY, DEFAULT_FEATURES, HOSTS.ANGELINA, new OfferLocation(CITIES.AMSTERDAM, 52.3909553943508, 4.929309666406198, 8),
      DEFAULT_DESCRIPTION, REVIEWS),
  new Offer(4, `Nice, cozy, warm big bed apartment`, OFFER_TYPES.APARTMENT, OFFER_LUXURY_TYPE.NONE, 180, 5, true,
      OFFER_DETAILS_IMAGES[0], OFFER_DETAILS_IMAGES, DEFAULT_CAPACITY, DEFAULT_FEATURES, HOSTS.ANGELINA, new OfferLocation(CITIES.AMSTERDAM, 52.3809553943508, 4.939309666406198, 8),
      DEFAULT_DESCRIPTION, REVIEWS),
  new Offer(5, `Wood and stone place`, OFFER_TYPES.APARTMENT, OFFER_LUXURY_TYPE.NONE, 80, 2.7, false,
      OFFER_DETAILS_IMAGES[0], OFFER_DETAILS_IMAGES, DEFAULT_CAPACITY, DEFAULT_FEATURES, HOSTS.ANGELINA, new OfferLocation(CITIES.AMSTERDAM, 52.3819553943508, 4.939319666406198, 8),
      DEFAULT_DESCRIPTION, REVIEWS),
];

const OFFERS_TESTS = [
  new Offer(1, `Beautiful & luxurious apartment at great location`, OFFER_TYPES.APARTMENT, OFFER_LUXURY_TYPE.PREMIUM, 120, 4.8, false,
      OFFER_DETAILS_IMAGES[0], OFFER_DETAILS_IMAGES, DEFAULT_CAPACITY, DEFAULT_FEATURES, HOSTS.ANGELINA, new OfferLocation(CITIES.AMSTERDAM, 52.3909553943508, 4.85309666406198, 8),
      DEFAULT_DESCRIPTION, REVIEWS, NEAR_PLACES),
  new Offer(2, `Wood and stone place`, OFFER_TYPES.PRIVATE_ROOM, OFFER_LUXURY_TYPE.NONE, 80, 3.2, true,
      OFFER_DETAILS_IMAGES[0], OFFER_DETAILS_IMAGES, DEFAULT_CAPACITY, DEFAULT_FEATURES, HOSTS.ANGELINA, new OfferLocation(CITIES.AMSTERDAM, 52.369553943508, 4.85309666406198, 8),
      DEFAULT_DESCRIPTION, REVIEWS, NEAR_PLACES),
  new Offer(3, `Canal View Prinsengracht`, OFFER_TYPES.PRIVATE_ROOM, OFFER_LUXURY_TYPE.NONE, 132, 4.1, false,
      OFFER_DETAILS_IMAGES[0], OFFER_DETAILS_IMAGES, DEFAULT_CAPACITY, DEFAULT_FEATURES, HOSTS.ANGELINA, new OfferLocation(CITIES.PARIS, 52.3909553943508, 4.929309666406198, 8),
      DEFAULT_DESCRIPTION, REVIEWS, NEAR_PLACES),
  new Offer(4, `Nice, cozy, warm big bed apartment`, OFFER_TYPES.APARTMENT, OFFER_LUXURY_TYPE.NONE, 180, 5, true,
      OFFER_DETAILS_IMAGES[0], OFFER_DETAILS_IMAGES, DEFAULT_CAPACITY, DEFAULT_FEATURES, HOSTS.ANGELINA, new OfferLocation(CITIES.PARIS, 52.3809553943508, 4.939309666406198, 8),
      DEFAULT_DESCRIPTION, REVIEWS, NEAR_PLACES),
  new Offer(5, `Wood and stone place`, OFFER_TYPES.APARTMENT, OFFER_LUXURY_TYPE.NONE, 80, 2.7, false,
      OFFER_DETAILS_IMAGES[0], OFFER_DETAILS_IMAGES, DEFAULT_CAPACITY, DEFAULT_FEATURES, HOSTS.ANGELINA, new OfferLocation(CITIES.COLOGNE, 52.3819553943508, 4.939319666406198, 8),
      DEFAULT_DESCRIPTION, REVIEWS, NEAR_PLACES),
];

const CITIES_TESTS = OFFERS_TESTS
  .map((offer) => offer.location.city.name)
  .filter((value, index, self) => self.indexOf(value) === index)
  .sort();

export {OFFERS_TESTS, CITIES_TESTS};
