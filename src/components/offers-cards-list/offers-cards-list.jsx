import React from 'react';
import PropTypes from 'prop-types';

import OffersCardsContainer from '../offers-cards-container/offers-cards-container.jsx';
import OffersCardsListMap from './offers-cards-list-map.jsx';

const OffersCardsList = (props) => {
  const {offers, onOfferTitleClick} = props;
  const locations = offers.map((offer) => offer.location);

  if (offers.length === 0) {
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
          <b className="places__found">{offers.length} places to stay in Amsterdam</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex="0">
              Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select" />
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li className="places__option places__option--active" tabIndex="0">Popular</li>
              <li className="places__option" tabIndex="0">Price: low to high</li>
              <li className="places__option" tabIndex="0">Price: high to low</li>
              <li className="places__option" tabIndex="0">Top rated first</li>
            </ul>
          </form>
          <OffersCardsContainer offers={offers} onOfferTitleClick={onOfferTitleClick} />
        </section>

        <div className="cities__right-section">
          <OffersCardsListMap locations={locations} />
        </div>
      </div>
    </div>
  );
};

OffersCardsList.propTypes = {
  onOfferTitleClick: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(
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
