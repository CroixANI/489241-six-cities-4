export default class Offer {
  constructor(id, title, type, luxuryType, price, rating, isBookmarked,
      images = [], capacity = null, features = [], host = null,
      location = null, description = ``) {
    this.id = id;
    this.title = title;
    this.type = type;
    this.luxuryType = luxuryType;
    this.price = price;
    this.rating = rating;
    this.isBookmarked = isBookmarked;
    this.images = images;
    this.capacity = capacity || {bedRoomsCount: 0, adultsCount: 0};
    this.features = features;
    this.host = host;
    this.location = location;
    this.description = description;
  }
}
