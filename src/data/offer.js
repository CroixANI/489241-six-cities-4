export default class Offer {
  constructor(id, title, price, rating, city, apartmentType, offerTag, isBookmarked, images, capacity = null, features = [], host = null, descriptions = null) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.rating = rating;
    this.city = city;
    this.apartmentType = apartmentType;
    this.offerTag = offerTag;
    this.isBookmarked = isBookmarked;
    this.images = images || [];
    this.capacity = capacity || {bedRoomsCount: 0, adultsCount: 0};
    this.features = features;
    this.host = host || {name: ``, isPro: false};
    this.descriptions = descriptions || [];
  }
}
