import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {Link} from 'react-router-dom';
import {Router} from 'react-router-dom';

import history from '../../history';
import CitiesMenu from './cities-menu.jsx';
import {CITIES_TESTS, OFFERS_TESTS} from '../../mocks/offers-tests';
import {SORT_TYPE, APP_ROUTE} from '../../data/constants';
import NameSpace from '../../reducer/name-space';

const match = {
  params: {
  },
};

Enzyme.configure({
  adapter: new Adapter(),
});

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
describe(`Cities Menu Component`, () => {
  it(`Should title be clicked`, () => {
    const citiesList = mount(
        <Provider store={store}>
          <Router history={history}>
            <CitiesMenu match={match} />
          </Router>
        </Provider>
    );

    const link = citiesList.find(Link).first();

    expect(link.props().to).toBe(`${APP_ROUTE.ROOT}${CITIES_TESTS[0]}`);
  });
});
