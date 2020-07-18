import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";

import Main from '../main/main.jsx';
import Offer from '../offer/offer.jsx';
import {ActionCreator} from "../../reducer.js";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderApp() {
    const {currentOfferId, offers, cities, selectedCity, onCityClick, onOfferClick} = this.props;
    const foundOffer = offers.find((offer) => offer.id === currentOfferId);

    if (foundOffer) {
      return <Offer offer={foundOffer} onOfferTitleClick={onOfferClick} />;
    } else {
      return <Main offers={offers} cities={cities} selectedCity={selectedCity} onCityClick={onCityClick} onOfferTitleClick={onOfferClick} />;
    }
  }
}

App.propTypes = {
  onCityClick: PropTypes.func.isRequired,
  onOfferClick: PropTypes.func.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCity: PropTypes.string.isRequired,
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
          city: PropTypes.string.isRequired,
          latitude: PropTypes.number.isRequired,
          longitude: PropTypes.number.isRequired
        }).isRequired,
      })
  ),
};

const mapStateToProps = (state) => ({
  offers: state.filteredOffers,
  cities: state.cities,
  selectedCity: state.city,
  currentOfferId: state.currentOfferId
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(city) {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.listOffers());
  },
  onOfferClick(offerId) {
    dispatch(ActionCreator.changeCurrentOffer(offerId));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
