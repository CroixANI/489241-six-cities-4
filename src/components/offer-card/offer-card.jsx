import React from 'react';
import PropTypes from 'prop-types';

import OfferCardRating from './offer-card-rating.jsx';

const OfferCard = (props) => {
  // eslint-disable-next-line react/prop-types
  const {offer, renderMark, onHover, onTitleClick, containerCssClass, imageWrapperCssClass} = props;
  const {
    id,
    title,
    price,
    type,
    isBookmarked,
    images
  } = offer;

  const containerCss = `${containerCssClass || `cities__place-card`} place-card`;
  const wrapperCss = `${imageWrapperCssClass || `cities__image-wrapper`} place-card__image-wrapper`;
  const mainImageUrl = images && images.length > 0 ? images[0] : null;

  const additionalClass = isBookmarked ? `place-card__bookmark-button--active` : ``;
  const bookmarkButtonClass = `place-card__bookmark-button button ${additionalClass}`;

  const handleHover = (selectedOffer) => () => {
    onHover(selectedOffer);
  };

  const handleMouseLeave = () => {
    onHover(null);
  };

  const handleTitleClick = (offerId) => () => {
    onTitleClick(offerId);
  };

  return (
    <article className={containerCss} onMouseEnter={handleHover(offer)} onMouseLeave={handleMouseLeave}>
      {renderMark && renderMark()}
      <div className={wrapperCss}>
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
        <h2 onClick={handleTitleClick(id)} className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  renderMark: PropTypes.func,
  onHover: PropTypes.func.isRequired,
  onTitleClick: PropTypes.func.isRequired,
  containerCssClass: PropTypes.string,
  imageWrapperCssClass: PropTypes.string,
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
