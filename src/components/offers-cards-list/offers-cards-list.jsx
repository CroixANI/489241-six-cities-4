import React from 'react';
import PropTypes from 'prop-types';

import OffersCardsContainer from '../offers-cards-container/offers-cards-container.jsx';
import OffersCardsListMap from './offers-cards-list-map.jsx';
import SortOffers from '../sort-order/sort-offers.jsx';

const OffersCardsList = (props) => {
  const {sortType, items, activeItem, onOfferTitleClick, onSort, onItemSelected} = props;
  const locations = items.map((offer) => offer.location);
  const activeLocation = activeItem && items && items.length > 0 && items[0].location.city === activeItem.location.city ? activeItem.location : null;

  if (items.length === 0) {
    return (
      <div className="cities">
        <div className="cities__places-container cities__places-container--empty container">
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">No places to stay available</b>
              <p className="cities__status-description">We could not find any property availbale at the moment in Dusseldorf</p>
            </div>
          </section>
          <div className="cities__right-section"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{items.length} places to stay in Amsterdam</b>
          <SortOffers activeOption={sortType} onSortTypeChange={onSort} />
          <OffersCardsContainer offers={items} onOfferTitleClick={onOfferTitleClick} onOfferHover={onItemSelected} />
        </section>

        <div className="cities__right-section">
          <OffersCardsListMap activeLocation={activeLocation} locations={locations} />
        </div>
      </div>
    </div>
  );
};

OffersCardsList.propTypes = {
  onOfferTitleClick: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
  onItemSelected: PropTypes.func.isRequired,
  activeItem: PropTypes.shape({
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
    }).isRequired,
  }),
  items: PropTypes.arrayOf(
      PropTypes.shape({
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
        }).isRequired,
      })
  ),
};

export default OffersCardsList;
