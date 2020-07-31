import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Footer from '../footer/footer.jsx';
import FavoritesEmpty from '../favorites-empty/favorites-empty.jsx';
import FavoritesGroup from '../favorites-group/favorites-group.jsx';
import {OperationCreator} from '../../reducer/data/data';
import {getGroupedByCityOffers} from '../../reducer/data/selectors';

const Favorites = (props) => {
  const {offersGroups, onFavoriteToggle} = props;

  if (!offersGroups || offersGroups.length === 0) {
    return <FavoritesEmpty />;
  }

  return (
    <>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {offersGroups.map((group) =>(
                <FavoritesGroup key={group.city} city={group.city} offers={group.offers}
                  onFavoriteToggle={onFavoriteToggle} />
              ))}
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
  offersGroups: PropTypes.arrayOf(PropTypes.shape({
    city: PropTypes.string.isRequired,
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
        })),
  }))
};

const mapStateToProps = (state) => ({
  offersGroups: getGroupedByCityOffers(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFavoriteToggle(offer) {
    dispatch(OperationCreator.toggleFavoriteFlag(offer));
  },
});

export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
