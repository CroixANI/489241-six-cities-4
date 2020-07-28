import Offer from '../data/offer';
import User from '../data/user';
import City from '../data/city';
import OfferReview from '../data/offer-review';
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
  AMSTERDAM: new City(`Amsterdam`, 52.370216, 4.895168, 10),
  PARIS: new City(`Paris`, 52.370216, 4.895168, 10),
  COLOGNE: new City(`Cologne`, 52.370216, 4.895168, 10)
};

const USERS = {
  ANGELINA: new User(1, `Angelina`, `noname@host.com`, `img/avatar-angelina.jpg`, true),
  ALICE: new User(2, `Alice`, `noname@host.com`, `img/avatar-angelina.jpg`, true),
  MAX: new User(3, `Max`, `noname@host.com`, `img/avatar-angelina.jpg`, true),
};

const DEFAULT_DESCRIPTION = `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`;

const REVIEWS_TEST = [
  new OfferReview(1, `1 A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      4, `2019-05-08T14:13:56.569Z`, USERS.ALICE),
  new OfferReview(2, `2 A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      2, `2018-05-08T14:13:56.569Z`, USERS.MAX),
  new OfferReview(2, `3 A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      5, `2020-05-08T14:13:56.569Z`, USERS.ANGELINA),
];

const OFFERS_TESTS = [
  new Offer(1, `Beautiful & luxurious apartment at great location`, OFFER_TYPES.APARTMENT, OFFER_LUXURY_TYPE.PREMIUM, 120, 4.8, true,
      OFFER_DETAILS_IMAGES[0], OFFER_DETAILS_IMAGES, DEFAULT_CAPACITY, DEFAULT_FEATURES, USERS.ANGELINA, new OfferLocation(CITIES.AMSTERDAM, 52.3909553943508, 4.85309666406198, 8),
      DEFAULT_DESCRIPTION),
  new Offer(2, `Wood and stone place`, OFFER_TYPES.PRIVATE_ROOM, OFFER_LUXURY_TYPE.NONE, 80, 3.2, true,
      OFFER_DETAILS_IMAGES[0], OFFER_DETAILS_IMAGES, DEFAULT_CAPACITY, DEFAULT_FEATURES, USERS.ANGELINA, new OfferLocation(CITIES.AMSTERDAM, 52.369553943508, 4.85309666406198, 8),
      DEFAULT_DESCRIPTION),
  new Offer(3, `Canal View Prinsengracht`, OFFER_TYPES.PRIVATE_ROOM, OFFER_LUXURY_TYPE.NONE, 132, 4.1, false,
      OFFER_DETAILS_IMAGES[0], OFFER_DETAILS_IMAGES, DEFAULT_CAPACITY, DEFAULT_FEATURES, USERS.ANGELINA, new OfferLocation(CITIES.PARIS, 52.3909553943508, 4.929309666406198, 8),
      DEFAULT_DESCRIPTION),
  new Offer(4, `Nice, cozy, warm big bed apartment`, OFFER_TYPES.APARTMENT, OFFER_LUXURY_TYPE.NONE, 180, 5, true,
      OFFER_DETAILS_IMAGES[0], OFFER_DETAILS_IMAGES, DEFAULT_CAPACITY, DEFAULT_FEATURES, USERS.ANGELINA, new OfferLocation(CITIES.PARIS, 52.3809553943508, 4.939309666406198, 8),
      DEFAULT_DESCRIPTION),
  new Offer(5, `Wood and stone place`, OFFER_TYPES.APARTMENT, OFFER_LUXURY_TYPE.NONE, 80, 2.7, false,
      OFFER_DETAILS_IMAGES[0], OFFER_DETAILS_IMAGES, DEFAULT_CAPACITY, DEFAULT_FEATURES, USERS.ANGELINA, new OfferLocation(CITIES.COLOGNE, 52.3819553943508, 4.939319666406198, 8),
      DEFAULT_DESCRIPTION),
];

const CITIES_TESTS = OFFERS_TESTS
  .map((offer) => offer.location.city.name)
  .filter((value, index, self) => self.indexOf(value) === index)
  .sort();

export {OFFERS_TESTS, CITIES_TESTS, REVIEWS_TEST};
