import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Main from './main';
import OffersCardsContainer from '../offers-cards-container/offers-cards-container.jsx';
import {OFFERS_TESTS, CITIES_TESTS} from '../../mocks/offers-tests';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Main Screen`, () => {
  it(`Should mouse over be triggered`, () => {
    const mainScreen = mount(
        <Main offers={OFFERS_TESTS} selectedCity={CITIES_TESTS[0]} cities={CITIES_TESTS} onCityClick={() => {}} onOfferTitleClick={() => {}} />
    );

    const card = mainScreen.find(`.place-card`).first();

    card.simulate(`mouseover`, {});

    expect(mainScreen.find(OffersCardsContainer).state(`selectedOffer`)).toBe(OFFERS_TESTS[0]);
  });

  it(`Should offers titles be clicked`, () => {
    const onOfferTitleClick = jest.fn();

    const mainScreen = mount(
        <Main offers={OFFERS_TESTS} selectedCity={CITIES_TESTS[0]} cities={CITIES_TESTS} onCityClick={() => {}} onOfferTitleClick={onOfferTitleClick} />
    );

    const allTitles = mainScreen.find(`h2.place-card__name`);

    allTitles.forEach((title) => title.simulate(`click`, {}));

    expect(onOfferTitleClick.mock.calls.length).toBe(OFFERS_TESTS.length);
  });
});
