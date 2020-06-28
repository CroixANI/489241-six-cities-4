import React from 'react';
import PropTypes from 'prop-types';

import OfferCardRating from './offer-card-rating.jsx';

const OfferCard = (props) => {
  const {offer, onHover, onTitleClick} = props;
  const {
    id,
    title,
    price,
    type,
    luxuryType,
    isBookmarked,
    images
  } = offer;

  const mainImageUrl = images && images.length > 0 ? images[0] : null;

  const additionalClass = isBookmarked ? `place-card__bookmark-button--active` : ``;
  const bookmarkButtonClass = `place-card__bookmark-button button ${additionalClass}`;

  return (
    <article
      className="cities__place-card place-card"
      onMouseOver={() => {
        onHover(offer);
      }}
    >
      {luxuryType && <div className="place-card__mark">
        <span>{luxuryType}</span>
      </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        {mainImageUrl && <a href="#">
          <img className="place-card__image" src={mainImageUrl} width="260" height="200" alt={type} />
        </a>}
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
          <OfferCardRating rating={offer.rating} />
        </div>
        <h2 onClick={() => {
          onTitleClick(id);
        }} className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  onHover: PropTypes.func.isRequired,
  onTitleClick: PropTypes.func.isRequired,
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    luxuryType: PropTypes.string.isRequired,
    isBookmarked: PropTypes.bool.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    location: PropTypes.shape({
      city: PropTypes.string.isRequired,
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired
    }),
  })
};

export default OfferCard;
