import OfferHost from '../data/offer-host';

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
    review: `TEST A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
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
