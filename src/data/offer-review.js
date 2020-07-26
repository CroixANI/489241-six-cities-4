import {createUser} from './user';

class OfferReview {
  constructor(id, reviewText, rating, date, user) {
    this.id = id;
    this.reviewText = reviewText;
    this.rating = rating;
    this.date = new Date(date);
    this.user = user;
  }
}

const createOfferReview = (reviewData) =>
  new OfferReview(reviewData.id, reviewData.comment, reviewData.rating, reviewData.date, createUser(reviewData.user));

export {createOfferReview};

export default OfferReview;
