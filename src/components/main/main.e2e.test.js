import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Main from './main';
import OffersList from '../offers-list/offers-list.jsx';
import OFFERS_TESTS from '../../mocks/offers-tests';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Main Screen`, () => {
  it(`Should mouse over be triggered`, () => {
    const mainScreen = mount(
        <Main offers={OFFERS_TESTS} onOfferTitleClick={() => {}} />
    );

    const card = mainScreen.find(`.place-card`).first();

    card.simulate(`mouseover`, {});

    expect(mainScreen.find(OffersList).state(`selectedOffer`)).toBe(OFFERS_TESTS[0]);
  });

  it(`Should offers titles be clicked`, () => {
    const onOfferTitleClick = jest.fn();

    const mainScreen = mount(
        <Main offers={OFFERS_TESTS} onOfferTitleClick={onOfferTitleClick} />
    );

    const allTitles = mainScreen.find(`h2.place-card__name`);

    allTitles.forEach((title) => title.simulate(`click`, {}));

    expect(onOfferTitleClick.mock.calls.length).toBe(OFFERS_TESTS.length);
  });
});
