import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {App} from './app';
import OffersCardsContainer from '../offers-cards-container/offers-cards-container.jsx';
import {OFFERS_TESTS, CITIES_TESTS} from '../../mocks/offers-tests';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`App Component`, () => {
  it(`Should mouse over be triggered`, () => {
    const appComponent = mount(
        <App offers={OFFERS_TESTS} selectedCity={CITIES_TESTS[0]} cities={CITIES_TESTS} onCityClick={() => {}} />
    );

    const card = appComponent.find(`.place-card`).first();

    card.simulate(`mouseover`, {});

    expect(appComponent.find(OffersCardsContainer).state(`selectedOffer`)).toBe(OFFERS_TESTS[0]);
  });

  it(`Should offer title be clicked and change state`, () => {
    const appComponent = mount(
        <App offers={OFFERS_TESTS} selectedCity={CITIES_TESTS[0]} cities={CITIES_TESTS} onCityClick={() => {}} />
    );

    const title = appComponent.find(`h2.place-card__name`).first();

    title.simulate(`click`, {});

    expect(appComponent.state(`clickedOfferId`)).toBe(OFFERS_TESTS[0].id);
  });
});
