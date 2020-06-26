import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";

import Main from '../main/main.jsx';
import Offer from '../offer/offer.jsx';
import OFFERS from '../../mocks/offers';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      clickedOfferId: null
    };
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-component">
            <Offer offer={OFFERS[0]} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderApp() {
    const {offers} = this.props;
    const {clickedOfferId} = this.state;

    if (clickedOfferId !== null) {
      return <Offer offer={OFFERS[0]} />;
    } else {
      return <Main offers={offers} onOfferTitleClick={(offerId) => {
        this.setState({
          clickedOfferId: offerId
        });
      }} />;
    }
  }
}

App.propTypes = {
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

export default App;
