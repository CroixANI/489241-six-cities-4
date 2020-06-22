import Offer from '../data/offer';

const OFFER_DETAILS = new Offer(
    1,
    `Beautiful & luxurious apartment at great location`,
    120,
    4,
    `Amsterdam`,
    `Apartment`,
    `Premium`,
    false,
    [
      {imageUrl: `img/room.jpg`, imageTitle: `Room`},
      {imageUrl: `img/apartment-01.jpg`, imageTitle: `Apartment`},
      {imageUrl: `img/apartment-02.jpg`, imageTitle: `Apartment`},
      {imageUrl: `img/apartment-03.jpg`, imageTitle: `Apartment`},
      {imageUrl: `img/studio-01.jpg`, imageTitle: `Photo Studio`},
      {imageUrl: `img/apartment-01.jpg`, imageTitle: `Apartment`}
    ],
    {
      bedRoomsCount: 3,
      adultsCount: 3
    },
    [
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
    ],
    {
      name: `Angelina`,
      isPro: true,
      imageUrl: `img/avatar-angelina.jpg`
    },
    [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    ]);

export default OFFER_DETAILS;
