import React from 'react';
import PropTypes from 'prop-types';

import OffersCardsList from '../offers-cards-list/offers-cards-list.jsx';
import CitiesMenu from '../cities-menu/cities-menu.jsx';
import Error from '../error/error.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item.jsx';
import {withHeader} from '../../hocs/with-header/with-header.jsx';

const Main = (props) => {
  const {offers, cities, selectedCity, onCityClick} = props;
  const mainClassName = `page__main page__main--index ${offers.length > 0 ? `` : `page__main--index-empty`}`;
  const limitedCities = cities.sort().slice(0, 6);

  const CitiesMenuWithActive = withActiveItem(CitiesMenu);

  return (
    <main className={mainClassName}>
      <Error />
      <h1 className="visually-hidden">Cities</h1>
      <CitiesMenuWithActive items={limitedCities} activeItem={selectedCity} onItemSelected={onCityClick} />
      <OffersCardsList />
    </main>
  );
};

Main.propTypes = {
  onCityClick: PropTypes.func.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCity: PropTypes.string,
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

export default withHeader(Main);
