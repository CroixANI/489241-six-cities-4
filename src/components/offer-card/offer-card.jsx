import React from 'react';
import PropTypes from 'prop-types';

const OfferCard = (props) => {
  const {offer, onHover} = props;
  const {
    title,
    price,
    apartmentType,
    offerTag,
    isBookmarked,
    mainImageUrl
  } = offer;

  let tag;
  if (offerTag) {
    tag = <div className="place-card__mark">
      <span>{offerTag}</span>
    </div>;
  } else {
    tag = <></>;
  }

  let bookmarkButtonClass = `place-card__bookmark-button button`;
  if (isBookmarked) {
    bookmarkButtonClass = `${bookmarkButtonClass} place-card__bookmark-button--active`;
  }

  return (
    <article
      className="cities__place-card place-card"
      onMouseOver={() => {
        onHover(offer);
      }}
    >
      {tag}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={mainImageUrl} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={bookmarkButtonClass} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `80%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{apartmentType}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  onHover: PropTypes.func.isRequired,
  offer: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    apartmentType: PropTypes.string.isRequired,
    offerTag: PropTypes.string.isRequired,
    isBookmarked: PropTypes.bool.isRequired,
    mainImageUrl: PropTypes.string.isRequired
  })
};

export default OfferCard;
