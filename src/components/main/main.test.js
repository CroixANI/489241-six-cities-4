import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {Router} from 'react-router-dom';

import history from '../../history';
import Main from './main';
import {OFFERS_TESTS, CITIES_TESTS} from '../../mocks/offers-tests';
import {SORT_TYPE} from '../../data/constants';
import NameSpace from '../../reducer/name-space';

const match = {
  params: {
  },
};

const mockStore = configureStore([]);
const store = mockStore({
  [NameSpace.APP]: {
    city: CITIES_TESTS[0],
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
          <Router history={history}>
            <Main offers={OFFERS_TESTS} match={match} />
          </Router>
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
