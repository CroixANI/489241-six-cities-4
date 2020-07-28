import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import Favorites from './favorites.jsx';
import NameSpace from '../../reducer/name-space';
import {OFFERS_TESTS, CITIES_TESTS} from '../../mocks/offers-tests';

const mockStore = configureStore([]);
const store = mockStore({
  [NameSpace.DATA]: {
    offers: OFFERS_TESTS,
    cities: CITIES_TESTS,
  },
});

it(`Render Favorites component`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <Favorites />
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
