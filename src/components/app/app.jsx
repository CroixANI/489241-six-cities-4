import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, Router, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import Main from '../main/main.jsx';
import Offer from '../offer/offer.jsx';
import Login from '../login/login.jsx';
import Favorites from '../favorites/favorites.jsx';
import NotFound from '../not-found/not-found.jsx';
import PrivateRoute from '../private-route/private-route.jsx';

import {ActionCreator} from '../../reducer/app/app';
import {getFilteredOffers, getCity} from '../../reducer/app/selectors.js';
import {getCities} from '../../reducer/data/selectors.js';
import {OperationCreator as UserOperationCreator, AuthorizationStatus} from '../../reducer/user/user';
import {getAuthorizationStatus, getIsAuthChecked} from '../../reducer/user/selectors';
import {withClassName} from '../../hocs/with-class-name/with-class-name.jsx';
import {APP_ROUTE} from '../../data/constants';
import history from '../../history';

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {onLogin, offers, cities, selectedCity, onCityClick, authorizationStatus, isAuthChecked} = this.props;
    const LoginScreen = withClassName(`page--gray page--login`, Login);
    const MainScreen = withClassName(`page--gray page--main`, Main);

    return (
      <Router history={history}>
        <Switch>
          <Route exact path={APP_ROUTE.ROOT}>
            <MainScreen offers={offers} cities={cities} selectedCity={selectedCity}
              onCityClick={onCityClick} />;
          </Route>
          <Route exact path={APP_ROUTE.LOGIN}>
            {authorizationStatus === AuthorizationStatus.AUTH && <Redirect to={APP_ROUTE.ROOT} />}
            <LoginScreen onLogin={onLogin} />
          </Route>
          <Route exact path={`${APP_ROUTE.OFFER}/:id`} component={Offer} />
          <PrivateRoute
            exact
            path={APP_ROUTE.FAVORITES}
            isAuthChecked={isAuthChecked}
            render={() => {
              return (
                <Favorites />
              );
            }}
          />
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  onCityClick: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  isAuthChecked: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
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

const mapStateToProps = (state) => ({
  offers: getFilteredOffers(state),
  cities: getCities(state),
  selectedCity: getCity(state),
  authorizationStatus: getAuthorizationStatus(state),
  isAuthChecked: getIsAuthChecked(state)
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  onLogin(authData) {
    dispatch(UserOperationCreator.login(authData));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
