import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";

import Main from '../main/main.jsx';
import Offer from '../offer/offer.jsx';
import OFFER_DETAILS from '../../mocks/offer-details';

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
            <Offer offer={OFFER_DETAILS} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderApp() {
    const {offers} = this.props;
    const {clickedOfferId} = this.state;

    if (clickedOfferId !== null) {
      return <Offer offer={OFFER_DETAILS} />;
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
        city: PropTypes.string.isRequired,
        apartmentType: PropTypes.string.isRequired,
        offerTag: PropTypes.string.isRequired,
        isBookmarked: PropTypes.bool.isRequired,
        images: PropTypes.arrayOf(PropTypes.shape({
          imageUrl: PropTypes.string.isRequired,
          imageTitle: PropTypes.string.isRequired
        })).isRequired
      })
  ),
};

export default App;
