import React from 'react';
import OfferCard from '../offer-card/offer-card.jsx';

const OfferCardPremium = (props) => {
  return (
    <OfferCard {...props} renderMark={() => (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    )} />
  );
};

export default OfferCardPremium;
