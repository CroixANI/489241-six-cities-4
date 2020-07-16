import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import OffersCardsContainer from '../offers-cards-container/offers-cards-container.jsx';
import OffersCardsListEmpty from '../offers-cards-list-empty/offers-cards-list-empty.jsx';
import Map from '../map/map.jsx';
import SortOffersMenu from '../sort-offers-menu/sort-offers-menu.jsx';
import {withClassName} from '../../hocs/with-class-name/with-class-name.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item.jsx';
import {ActionCreator} from "../../reducer.js";
import {SORT_TYPE} from '../../data/constants.js';

const OffersCardsList = (props) => {
  const {sortType, items, activeItem, onOfferTitleClick, onSort, onItemSelected} = props;
  const locations = items.map((offer) => offer.location);
  const activeLocation = activeItem && items && items.length > 0 && items[0].location.city === activeItem.location.city ? activeItem.location : null;

  const OffersCardsListMap = withClassName(`cities__map`, Map);

  if (items.length === 0) {
    return (
      <OffersCardsListEmpty />
    );
  }

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{items.length} places to stay in Amsterdam</b>
          <SortOffersMenu activeOption={sortType} onSortTypeChange={onSort} />
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
  items: sortOffers(state.filteredOffers, state.sortType),
  sortType: state.sortType
});

const mapDispatchToProps = (dispatch) => ({
  onSort(sortType) {
    dispatch(ActionCreator.changeSortType(sortType));
  }
});

export {OffersCardsList};

export default connect(mapStateToProps, mapDispatchToProps)(withActiveItem(OffersCardsList));
