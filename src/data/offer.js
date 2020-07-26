import {createUser} from './user';
import {createOfferLocation} from './offer-location';
import {OFFER_LUXURY_TYPE} from '../data/constants';

class Offer {
  constructor(id, title, type, luxuryType, price, rating, isBookmarked,
      previewImage = ``, images = [], capacity = null, features = [], host = null,
      location = null, description = ``) {
    this.id = id;
    this.title = title;
    this.type = type;
    this.luxuryType = luxuryType;
    this.price = price;
    this.rating = rating;
    this.isBookmarked = isBookmarked;
    this.previewImage = previewImage;
    this.images = images;
    this.capacity = capacity || {bedRoomsCount: 0, adultsCount: 0};
    this.features = features;
    this.host = host;
    this.location = location;
    this.description = description;
  }
}

const createOffer = (offerData) =>
  new Offer(offerData.id, offerData.title, offerData.type,
      offerData.is_premium === true ? OFFER_LUXURY_TYPE.PREMIUM : OFFER_LUXURY_TYPE.NONE,
      offerData.price, offerData.rating, offerData.is_favorite === true, offerData.preview_image,
      offerData.images, {bedRoomsCount: offerData.bedrooms, adultsCount: offerData.max_adults},
      offerData.goods, createUser(offerData.host), createOfferLocation(offerData.city, offerData.location),
      offerData.description);

export {createOffer};

export default Offer;
