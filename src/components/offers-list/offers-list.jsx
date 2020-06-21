import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import OfferCard from '../offer-card/offer-card.jsx';

class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedOffer: null
    };
  }

  render() {
    const {offers, onOfferTitleClick} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <OfferCard key={offer.id} offer={offer} onTitleClick={onOfferTitleClick}
            onHover={(selectedOffer) => {
              this.setState({
                selectedOffer
              });
            }} />
        ))}
      </div>
    );
  }
}

OffersList.propTypes = {
  onOfferTitleClick: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        city: PropTypes.string.isRequired,
        apartmentType: PropTypes.string.isRequired,
        offerTag: PropTypes.string.isRequired,
        isBookmarked: PropTypes.bool.isRequired,
        mainImageUrl: PropTypes.string.isRequired
      })
  ).isRequired,
};

export default OffersList;
