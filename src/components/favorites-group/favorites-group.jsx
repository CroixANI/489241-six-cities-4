import React from 'react';
import PropTypes from 'prop-types';

import FavoriteItem from '../favorite-item/favorite-item.jsx';

const FavoritesGroup = (props) => {
  const {city, offers, onFavoriteToggle} = props;
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => (
          <FavoriteItem key={offer.id} offer={offer} onFavoriteToggle={onFavoriteToggle} />
        ))}
      </div>
    </li>
  );
};

FavoritesGroup.propTypes = {
  onFavoriteToggle: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        luxuryType: PropTypes.string.isRequired,
        isBookmarked: PropTypes.bool.isRequired,
        previewImage: PropTypes.string.isRequired,
      })
  ),
};

export default FavoritesGroup;
