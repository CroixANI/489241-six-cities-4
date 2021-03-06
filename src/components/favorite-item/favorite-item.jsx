import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import Rating from '../rating/rating.jsx';
import {withClassName} from '../../hocs/with-class-name/with-class-name.jsx';
import {APP_ROUTE} from '../../data/constants.js';

const FavoriteItem = (props) => {
  const {offer, onFavoriteToggle} = props;
  const {
    title,
    price,
    type,
    previewImage
  } = offer;

  const FavoriteRating = withClassName(`place-card__stars`, Rating);
  const handleFavoriteToggle = () => {
    onFavoriteToggle(offer);
  };

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`${APP_ROUTE.OFFER}/${offer.id}`}>
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place image" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button"
            onClick={handleFavoriteToggle}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <FavoriteRating rating={offer.rating} />
        </div>
        <h2 className="place-card__name">
          <Link to={`${APP_ROUTE.OFFER}/${offer.id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

FavoriteItem.propTypes = {
  onFavoriteToggle: PropTypes.func.isRequired,
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    luxuryType: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
  }).isRequired
};

export default FavoriteItem;
