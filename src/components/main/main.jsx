import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import OffersCardsList from '../offers-cards-list/offers-cards-list.jsx';
import CitiesMenu from '../cities-menu/cities-menu.jsx';
import Error from '../error/error.jsx';
import {withHeader} from '../../hocs/with-header/with-header.jsx';
import {getFilteredOffers} from '../../reducer/app/selectors.js';

const Main = (props) => {
  const {match, hasOffers} = props;
  const mainClassName = `page__main page__main--index ${hasOffers ? `` : `page__main--index-empty`}`;
  return (
    <main className={mainClassName}>
      <Error />
      <h1 className="visually-hidden">Cities</h1>
      <CitiesMenu match={match}/>
      <OffersCardsList />
    </main>
  );
};

Main.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      cityName: PropTypes.string,
    }),
  }).isRequired,
  hasOffers: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  hasOffers: getFilteredOffers(state).length > 0,
});

export {Main};
export default connect(mapStateToProps)(withHeader(Main));
