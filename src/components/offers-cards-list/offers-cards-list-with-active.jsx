import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import OffersCardsList from './offers-cards-list.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item.jsx';
import {ActionCreator} from "../../reducer.js";
import {SORT_TYPE} from '../../data/constants.js';

const OffersCardsListWithActiveOffer = (props) => {
  const {offers} = props;

  const OffersCardsListWrapper = withActiveItem(OffersCardsList);

  return <OffersCardsListWrapper items={offers} {...props} />;
};

OffersCardsListWithActiveOffer.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(OffersCardsListWithActiveOffer);
