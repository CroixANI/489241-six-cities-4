import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";

import Main from '../main/main.jsx';
import Offer from '../offer/offer.jsx';
import OFFERS from '../../mocks/offers';
import {ActionCreator} from "../../reducer.js";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      clickedOfferId: null
    };

    this._handleOfferTitleClick = this._handleOfferTitleClick.bind(this);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-component">
            <Offer offer={OFFERS[0]} onOfferTitleClick={this._handleOfferTitleClick} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _handleOfferTitleClick(offerId) {
    this.setState({
      clickedOfferId: offerId
    });
  }

  _renderApp() {
    const {offers, cities, selectedCity, onCityClick} = this.props;
    const {clickedOfferId} = this.state;
    const foundOffer = OFFERS.find((offer) => offer.id === clickedOfferId);

    if (clickedOfferId !== null) {
      return <Offer offer={foundOffer} onOfferTitleClick={this._handleOfferTitleClick} />;
    } else {
      return <Main offers={offers} cities={cities} selectedCity={selectedCity} onCityClick={onCityClick} onOfferTitleClick={this._handleOfferTitleClick} />;
    }
  }
}

App.propTypes = {
  onCityClick: PropTypes.func.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCity: PropTypes.string.isRequired,
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
  selectedCity: state.city
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(city) {
    dispatch(ActionCreator.changeCity(city));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
