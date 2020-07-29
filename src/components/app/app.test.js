import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import App from './app';
import {OFFERS_TESTS, CITIES_TESTS} from '../../mocks/offers-tests';
import {SORT_TYPE} from '../../data/constants';
import NameSpace from '../../reducer/name-space';

const mockStore = configureStore([]);
const store = mockStore({
  [NameSpace.APP]: {
    city: CITIES_TESTS[0],
    sortType: SORT_TYPE.POPULAR,
  },
  [NameSpace.DATA]: {
    cities: CITIES_TESTS,
    offers: OFFERS_TESTS,
    isDataLoaded: true,
  },
  [NameSpace.USER]: {
    authorizationStatus: `AUTH`,
    currentUser: null,
    isAuthChecked: true,
  },
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
