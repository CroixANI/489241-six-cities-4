import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import OffersCardsContainer from '../offers-cards-container/offers-cards-container.jsx';
import OffersCardsListEmpty from '../offers-cards-list-empty/offers-cards-list-empty.jsx';
import Map from '../map/map.jsx';
import SortOffersMenu from '../sort-offers-menu/sort-offers-menu.jsx';
import {withClassName} from '../../hocs/with-class-name/with-class-name.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item.jsx';
import {ActionCreator as AppActionCreator} from '../../reducer/app/app';
import {getSortedOffers, getSortType} from '../../reducer/app/selectors';
import {OperationCreator as DataOperationCreator} from '../../reducer/data/data';

const OffersCardsList = (props) => {
  const {sortType, items, activeItem, onSort, onItemSelected, onFavoriteToggle} = props;
  const locations = items.map((offer) => offer.location);
  const activeLocation = activeItem && items && items.length > 0 && items[0].location.city.name === activeItem.location.city.name ? activeItem.location : null;

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
          <OffersCardsContainer offers={items} onOfferHover={onItemSelected} onFavoriteToggle={onFavoriteToggle} />
        </section>

        <div className="cities__right-section">
          <OffersCardsListMap activeLocation={activeLocation} locations={locations} />
        </div>
      </div>
    </div>
  );
};

OffersCardsList.propTypes = {
  onFavoriteToggle: PropTypes.func.isRequired,
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
      city: PropTypes.shape({
        name: PropTypes.string.isRequired,
        location: PropTypes.shape({
          latitude: PropTypes.number.isRequired,
          longitude: PropTypes.number.isRequired,
          zoom: PropTypes.number.isRequired,
        }),
      }),
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
          city: PropTypes.shape({
            name: PropTypes.string.isRequired,
            location: PropTypes.shape({
              latitude: PropTypes.number.isRequired,
              longitude: PropTypes.number.isRequired,
              zoom: PropTypes.number.isRequired,
            }),
          }),
          latitude: PropTypes.number.isRequired,
          longitude: PropTypes.number.isRequired
        }).isRequired,
      })
  ),
};

const mapStateToProps = (state) => ({
  items: getSortedOffers(state),
  sortType: getSortType(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSort(sortType) {
    dispatch(AppActionCreator.changeSortType(sortType));
  },
  onFavoriteToggle(offer) {
    dispatch(DataOperationCreator.toggleFavoriteFlag(offer));
  },
});

export {OffersCardsList};

export default connect(mapStateToProps, mapDispatchToProps)(withActiveItem(OffersCardsList));
