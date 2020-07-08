import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import {App} from './app';
import OffersCardsContainer from '../offers-cards-container/offers-cards-container.jsx';
import {OFFERS_TESTS, CITIES_TESTS} from '../../mocks/offers-tests';
import {SORT_TYPE} from '../../data/constants';

Enzyme.configure({
  adapter: new Adapter(),
});

const mockStore = configureStore([]);

describe(`App Component`, () => {
  const store = mockStore({
    filteredOffers: OFFERS_TESTS,
    sortType: SORT_TYPE.POPULAR
  });

  it(`Should mouse over be triggered`, () => {
    const appComponent = mount(
        <Provider store={store}>
          <App offers={OFFERS_TESTS} selectedCity={CITIES_TESTS[0]} cities={CITIES_TESTS} onCityClick={() => {}} />
        </Provider>
    );

    const card = appComponent.find(`.place-card`).first();

    card.simulate(`mouseover`, {});

    expect(appComponent.find(OffersCardsContainer).state(`selectedOffer`)).toBe(OFFERS_TESTS[0]);
  });

  it(`Should offer title be clicked and change state`, () => {
    const wrapper = mount(
        <Provider store={store}>
          <App offers={OFFERS_TESTS} selectedCity={CITIES_TESTS[0]} cities={CITIES_TESTS} onCityClick={() => {}} />
        </Provider>
    );

    const appComponent = wrapper.find(App).first();
    const title = appComponent.find(`h2.place-card__name`).first();

    title.simulate(`click`, {});

    expect(appComponent.state(`clickedOfferId`)).toBe(OFFERS_TESTS[0].id);
  });
});
