import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, Router, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import Main from '../main/main.jsx';
import Offer from '../offer/offer.jsx';
import Login from '../login/login.jsx';
import Favorites from '../favorites/favorites.jsx';
import NotFound from '../not-found/not-found.jsx';

import {ActionCreator} from '../../reducer/app/app';
import {getFilteredOffers, getCity, getCurrentOfferId} from '../../reducer/app/selectors.js';
import {getCities} from '../../reducer/data/selectors.js';
import {OperationCreator as UserOperationCreator, AuthorizationStatus} from '../../reducer/user/user';
import {getAuthorizationStatus, getIsAuthChecked} from '../../reducer/user/selectors';
import {withClassName} from '../../hocs/with-class-name/with-class-name.jsx';
import {OperationCreator as OfferDataOperationCreator} from '../../reducer/offer-data/offer-data';
import {APP_ROUTE} from '../../data/constants';
import history from '../../history';

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {onLogin, authorizationStatus, isAuthChecked} = this.props;
    const LoginScreen = withClassName(`page--gray page--login`, Login);

    return (
      <Router history={history}>
        <Switch>
          <Route exact path={APP_ROUTE.ROOT}>
            {this._renderApp()}
          </Route>
          <Route exact path={APP_ROUTE.LOGIN}>
            {authorizationStatus === AuthorizationStatus.AUTH && <Redirect to={APP_ROUTE.ROOT} />}
            <LoginScreen onLogin={onLogin} />
          </Route>
          <Route exact path={APP_ROUTE.FAVORITES}>
            {authorizationStatus !== AuthorizationStatus.AUTH && isAuthChecked && <Redirect to={APP_ROUTE.LOGIN} />}
            <Favorites />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    );
  }

  _renderApp() {
    const {currentOfferId, offers, cities, selectedCity, onCityClick, onOfferClick} = this.props;
    const foundOffer = offers.find((offer) => offer.id === currentOfferId);
    const MainScreen = withClassName(`page--gray page--main`, Main);
    if (foundOffer) {
      return <Offer offer={foundOffer} onOfferTitleClick={onOfferClick} />;
    } else {
      return <MainScreen offers={offers} cities={cities} selectedCity={selectedCity} onCityClick={onCityClick} onOfferTitleClick={onOfferClick} />;
    }
  }
}

App.propTypes = {
  onCityClick: PropTypes.func.isRequired,
  onOfferClick: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  isAuthChecked: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCity: PropTypes.string,
  currentOfferId: PropTypes.number,
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

const mapStateToProps = (state) => ({
  offers: getFilteredOffers(state),
  cities: getCities(state),
  selectedCity: getCity(state),
  currentOfferId: getCurrentOfferId(state),
  authorizationStatus: getAuthorizationStatus(state),
  isAuthChecked: getIsAuthChecked(state)
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  onOfferClick(offerId) {
    dispatch(ActionCreator.changeCurrentOffer(offerId));
    dispatch(OfferDataOperationCreator.loadReviews(offerId));
    dispatch(OfferDataOperationCreator.loadNearBy(offerId));
  },
  onLogin(authData) {
    dispatch(UserOperationCreator.login(authData));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
