import React from 'react';
import PropTypes from 'prop-types';

import Rating from '../rating/rating.jsx';
import {withClassName} from '../../hocs/with-class-name/with-class-name.jsx';

const OfferCard = (props) => {
  // eslint-disable-next-line react/prop-types
  const {offer, renderMark, onHover, onTitleClick, containerCssClass, imageWrapperCssClass, onFavoriteToggle} = props;
  const {
    id,
    title,
    price,
    type,
    isBookmarked,
    previewImage
  } = offer;

  const OfferCardRating = withClassName(`place-card__stars`, Rating);

  const containerCss = `${containerCssClass || `cities__place-card`} place-card`;
  const wrapperCss = `${imageWrapperCssClass || `cities__image-wrapper`} place-card__image-wrapper`;

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

  const handleFavoriteToggle = () => {
    onFavoriteToggle(offer);
  };

  return (
    <article className={containerCss} onMouseEnter={handleHover(offer)} onMouseLeave={handleMouseLeave}>
      {renderMark && renderMark()}
      <div className={wrapperCss}>
        {previewImage && <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt={type} />
        </a>}
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button onClick={handleFavoriteToggle} className={bookmarkButtonClass} type="button">
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
  onFavoriteToggle: PropTypes.func.isRequired,
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
    previewImage: PropTypes.string.isRequired,
    location: PropTypes.shape({
      city: PropTypes.shape({
        name: PropTypes.string.isRequired,
        location: PropTypes.shape({
          latitude: PropTypes.number.isRequired,
          longitude: PropTypes.number.isRequired,
          zoom: PropTypes.number.isRequired,
        }),
      }),
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired
    }),
  })
};

export default OfferCard;
