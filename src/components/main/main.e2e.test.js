import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import Main from './main';
import OffersCardsList from '../offers-cards-list/offers-cards-list.jsx';
import {OFFERS_TESTS, CITIES_TESTS} from '../../mocks/offers-tests';
import {SORT_TYPE} from '../../data/constants';
import NameSpace from '../../reducer/name-space';
import {getFilteredOffers} from '../../reducer/app/selectors';

Enzyme.configure({
  adapter: new Adapter(),
});

const mockStore = configureStore([]);
const store = mockStore({
  [NameSpace.APP]: {
    city: CITIES_TESTS[0],
    currentOfferId: null,
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

describe(`Main Screen`, () => {
  it(`Should mouse over be triggered`, () => {
    const mainScreen = mount(
        <Provider store={store}>
          <Main offers={OFFERS_TESTS} selectedCity={CITIES_TESTS[0]} cities={CITIES_TESTS} onCityClick={() => {}} onOfferTitleClick={() => {}} />
        </Provider>
    );

    const card = mainScreen.find(`.place-card`).first();

    card.simulate(`mouseenter`, {});

    expect(mainScreen.find(OffersCardsList).childAt(0).instance().state.activeItem).toBe(OFFERS_TESTS[0]);
  });

  it(`Should offers titles be clicked`, () => {
    const filteredOffers = getFilteredOffers(store.getState());
    const onOfferTitleClick = jest.fn();

    const mainScreen = mount(
        <Provider store={store}>
          <Main offers={OFFERS_TESTS} selectedCity={CITIES_TESTS[0]} cities={CITIES_TESTS} onCityClick={() => {}} onOfferTitleClick={onOfferTitleClick} />
        </Provider>
    );

    const allTitles = mainScreen.find(`h2.place-card__name`);

    allTitles.forEach((title) => title.simulate(`click`, {}));

    expect(onOfferTitleClick.mock.calls.length).toBe(filteredOffers.length);
  });
});
