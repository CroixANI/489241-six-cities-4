import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import App from './app';
import {OFFERS_TESTS, CITIES_TESTS} from '../../mocks/offers-tests';
import {SORT_TYPE} from '../../data/constants';

const mockStore = configureStore([]);
const store = mockStore({
  filteredOffers: OFFERS_TESTS,
  city: CITIES_TESTS[0],
  sortType: SORT_TYPE.POPULAR,
  cities: CITIES_TESTS
});

it(`Render Main component`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <App />
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
