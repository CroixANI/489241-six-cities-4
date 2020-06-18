export default class Offer {
  constructor(id, title, price, rating, city, apartmentType, offerTag, isBookmarked) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.rating = rating;
    this.city = city;
    this.apartmentType = apartmentType;
    this.offerTag = offerTag;
    this.isBookmarked = isBookmarked;
  }
}
