import Offer from '../data/offer';

const OFFERS_TESTS = [
  new Offer(1, `Beautiful & luxurious apartment at great location`, 120, 4, `Amsterdam`, `Apartment`, `Premium`, false, `img/apartment-01.jpg`),
  new Offer(2, `Wood and stone place`, 80, 3, `Amsterdam`, `Private room`, ``, true, `img/room.jpg`),
  new Offer(3, `Canal View Prinsengracht`, 132, 4, `Amsterdam`, `Apartment`, ``, false, `img/apartment-02.jpg`),
  new Offer(4, `Nice, cozy, warm big bed apartment`, 180, 5, `Amsterdam`, `Apartment`, ``, true, `img/apartment-03.jpg`),
  new Offer(5, `Wood and stone place`, 80, 2, `Amsterdam`, `Private room`, ``, false, `img/room.jpg`),

  new Offer(6, `Bed in 8 Bed Dorm`, 43, 4, `Paris`, `Private room`, ``, false, `img/room.jpg`),
  new Offer(7, `Bedroom Paris, close to Montmartre - Gare du Nord`, 201, 3, `Paris`, `Apartment`, ``, true, `img/apartment-01.jpg`),
  new Offer(8, `Appartement Cosy refait à neuf !`, 179, 4, `Paris`, `Apartment`, ``, true, `img/apartment-02.jpg`),
  new Offer(9, `La Castellane`, 500, 5, `Paris`, `Apartment`, ``, true, `img/apartment-03.jpg`),
  new Offer(10, `Stone place`, 30, 2, `Paris`, `Private room`, ``, false, `img/room.jpg`),
];

export default OFFERS_TESTS;
