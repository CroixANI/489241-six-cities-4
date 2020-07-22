import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import Main from './main';
import {OFFERS_TESTS, CITIES_TESTS} from '../../mocks/offers-tests';
import {SORT_TYPE} from '../../data/constants';
import NameSpace from '../../reducer/name-space';

const mockStore = configureStore([]);
const store = mockStore({
  [NameSpace.APP]: {
    city: CITIES_TESTS[0],
    currentOfferId: null,
    filteredOffers: OFFERS_TESTS,
    sortType: SORT_TYPE.POPULAR,
  },
  [NameSpace.DATA]: {
    cities: CITIES_TESTS,
    offers: OFFERS_TESTS,
  },
  [NameSpace.USER]: {
    authorizationStatus: `NO_AUTH`,
  },
});

it(`Render Main component`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <Main offers={OFFERS_TESTS} selectedCity={CITIES_TESTS[0]} cities={CITIES_TESTS} onCityClick={() => {}} onOfferTitleClick={() => {}} />
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
