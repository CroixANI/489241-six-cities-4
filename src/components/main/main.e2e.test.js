import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import Main from './main';
import OffersCardsContainer from '../offers-cards-container/offers-cards-container.jsx';
import {OFFERS_TESTS, CITIES_TESTS} from '../../mocks/offers-tests';
import {SORT_TYPE} from '../../data/constants';

Enzyme.configure({
  adapter: new Adapter(),
});

const mockStore = configureStore([]);
const store = mockStore({
  filteredOffers: OFFERS_TESTS,
  sortType: SORT_TYPE.POPULAR
});

describe(`Main Screen`, () => {
  it(`Should mouse over be triggered`, () => {
    const mainScreen = mount(
        <Provider store={store}>
          <Main offers={OFFERS_TESTS} selectedCity={CITIES_TESTS[0]} cities={CITIES_TESTS} onCityClick={() => {}} onOfferTitleClick={() => {}} />
        </Provider>
    );

    const card = mainScreen.find(`.place-card`).first();

    card.simulate(`mouseover`, {});

    expect(mainScreen.find(OffersCardsContainer).state(`selectedOffer`)).toBe(OFFERS_TESTS[0]);
  });

  it(`Should offers titles be clicked`, () => {
    const onOfferTitleClick = jest.fn();

    const mainScreen = mount(
        <Provider store={store}>
          <Main offers={OFFERS_TESTS} selectedCity={CITIES_TESTS[0]} cities={CITIES_TESTS} onCityClick={() => {}} onOfferTitleClick={onOfferTitleClick} />
        </Provider>
    );

    const allTitles = mainScreen.find(`h2.place-card__name`);

    allTitles.forEach((title) => title.simulate(`click`, {}));

    expect(onOfferTitleClick.mock.calls.length).toBe(OFFERS_TESTS.length);
  });
});
