import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import OffersCardsListWithActiveOffer from './offers-cards-list-with-active.jsx';
import {OFFERS_TESTS} from '../../mocks/offers-tests';
import {SORT_TYPE} from '../../data/constants';

const mockStore = configureStore([]);
const store = mockStore({
  filteredOffers: OFFERS_TESTS,
  sortType: SORT_TYPE.POPULAR
});

it(`Render Offers List With Active item component`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <OffersCardsListWithActiveOffer onOfferTitleClick={() => {}} />
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
