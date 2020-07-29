import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Footer from '../footer/footer.jsx';
import FavoritesEmpty from '../favorites-empty/favorites-empty.jsx';
import FavoritesGroup from '../favorites-group/favorites-group.jsx';
import {OperationCreator} from '../../reducer/data/data';
import {getBookmarkedOffers} from '../../reducer/data/selectors';

const groupOffersByCity = (offers) => {
  return offers.reduce((total, offer) => {
    const cityName = offer.location.city.name;

    if (!total.has(cityName)) {
      total.set(cityName, []);
    }

    const offersInCity = total.get(cityName);
    offersInCity.push(offer);

    return total;
  }, new Map());
};

const Favorites = (props) => {
  const {offers, onFavoriteToggle} = props;

  if (!offers || offers.length === 0) {
    return <FavoritesEmpty />;
  }

  const groupedOffers = groupOffersByCity(offers);
  const childElements = [];
  groupedOffers.forEach((val, key) =>(
    childElements.push(<FavoritesGroup key={key} city={key} offers={val}
      onFavoriteToggle={onFavoriteToggle} />)));
  return (
    <>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {childElements}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

Favorites.propTypes = {
  onFavoriteToggle: PropTypes.func.isRequired,
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

const mapStateToProps = (state) => ({
  offers: getBookmarkedOffers(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFavoriteToggle(offer) {
    dispatch(OperationCreator.toggleFavoriteFlag(offer));
  },
});

export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
