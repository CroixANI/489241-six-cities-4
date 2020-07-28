import {createCityDto} from './city';
import {createUser, createUserDto} from './user';
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

const createOfferDto = (offer) => ({
  'bedrooms': offer.capacity.bedRoomsCount,
  'city': createCityDto(offer.location.city),
  'description': offer.description,
  'goods': offer.features,
  'host': createUserDto(offer.host),
  'id': offer.id,
  'images': offer.images,
  'is_favorite': offer.isBookmarked,
  'is_premium': offer.luxuryType === OFFER_LUXURY_TYPE.PREMIUM,
  'location': {
    'latitude': offer.location.latitude,
    'longitude': offer.location.longitude,
    'zoom': offer.location.zoom
  },
  'max_adults': offer.capacity.adultsCount,
  'preview_image': offer.previewImage,
  'price': offer.price,
  'rating': offer.rating,
  'title': offer.title,
  'type': offer.type
});

export {createOffer, createOfferDto};

export default Offer;
