import React from 'react';
import PropTypes from 'prop-types';

import OfferCard from '../offer-card/offer-card.jsx';
import OfferCardPremium from '../offer-card-premium/offer-card-premium.jsx';
import {OFFER_LUXURY_TYPE} from '../../data/constants.js';

const OffersCardsContainer = (props) => {
  const {offers, onOfferTitleClick, onOfferHover} = props;
  const getOfferCardByLuxuryType = (offer) => {
    switch (offer.luxuryType) {
      case OFFER_LUXURY_TYPE.PREMIUM:
        return <OfferCardPremium key={offer.id} offer={offer} onTitleClick={onOfferTitleClick}
          onHover={onOfferHover} />;
      default:
        return <OfferCard key={offer.id} offer={offer} onTitleClick={onOfferTitleClick}
          onHover={onOfferHover} />;
    }
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => getOfferCardByLuxuryType(offer))}
    </div>
  );
};

OffersCardsContainer.propTypes = {
  onOfferTitleClick: PropTypes.func.isRequired,
  onOfferHover: PropTypes.func.isRequired,
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
        }),
      })
  ).isRequired,
};

export default OffersCardsContainer;
