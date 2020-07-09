import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import OffersCardsContainer from '../offers-cards-container/offers-cards-container.jsx';
import OffersCardsListMap from './offers-cards-list-map.jsx';
import SortOffers from '../sort-order/sort-offers.jsx';
import {ActionCreator} from "../../reducer.js";
import {SORT_TYPE} from '../../data/constants.js';

class OffersCardsList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedOffer: null
    };

    this._handleOfferOnHover = this._handleOfferOnHover.bind(this);
  }

  _handleOfferOnHover(selectedOffer) {
    this.setState({
      selectedOffer
    });
  }

  render() {
    const {selectedOffer} = this.state;
    const {sortType, offers, onOfferTitleClick, onSort} = this.props;
    const locations = offers.map((offer) => offer.location);
    const activeLocation = selectedOffer && offers && offers.length > 0 && offers[0].location.city === selectedOffer.location.city ? selectedOffer.location : null;

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
            <SortOffers activeOption={sortType} onSortTypeChange={onSort} />
            <OffersCardsContainer offers={offers} onOfferTitleClick={onOfferTitleClick} onOfferHover={this._handleOfferOnHover} />
          </section>

          <div className="cities__right-section">
            <OffersCardsListMap activeLocation={activeLocation} locations={locations} />
          </div>
        </div>
      </div>
    );
  }
}

OffersCardsList.propTypes = {
  onOfferTitleClick: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
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

const sortOffers = (offers, sortType) => {
  const copyOffers = [...offers];

  switch (sortType) {
    case SORT_TYPE.PRICE_HIGH_TO_LOW:
      return copyOffers.sort((a, b) => b.price - a.price);
    case SORT_TYPE.PRICE_LOW_TO_HIGH:
      return copyOffers.sort((a, b) => a.price - b.price);
    case SORT_TYPE.TOP_RATED:
      return copyOffers.sort((a, b) => b.rating - a.rating);
  }

  return offers;
};

const mapStateToProps = (state) => ({
  offers: sortOffers(state.filteredOffers, state.sortType),
  sortType: state.sortType
});

const mapDispatchToProps = (dispatch) => ({
  onSort(sortType) {
    dispatch(ActionCreator.changeSortType(sortType));
  }
});

export {OffersCardsList};

export default connect(mapStateToProps, mapDispatchToProps)(OffersCardsList);
