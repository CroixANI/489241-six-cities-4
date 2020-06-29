import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import OffersCardsContainer from './offers-cards-container';
import OfferCard from '../offer-card/offer-card.jsx';
import OFFERS_TESTS from '../../mocks/offers-tests';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Offers List Component`, () => {
  it(`Should mouse over be triggered and change component state`, () => {
    const offersList = mount(
        <OffersCardsContainer offers={OFFERS_TESTS} onOfferTitleClick={() => {}} />
    );

    const card = offersList.find(`.place-card`).first();

    card.simulate(`mouseover`, {});

    expect(offersList.state(`selectedOffer`)).toBe(OFFERS_TESTS[0]);
    expect(offersList.find(OfferCard).length).toBe(OFFERS_TESTS.length);
  });

  it(`Should offers titles be clicked`, () => {
    const onOfferTitleClick = jest.fn();

    const offersList = mount(
        <OffersCardsContainer offers={OFFERS_TESTS} onOfferTitleClick={onOfferTitleClick} />
    );

    const allTitles = offersList.find(`h2.place-card__name`);

    allTitles.forEach((title) => title.simulate(`click`, {}));

    expect(onOfferTitleClick.mock.calls.length).toBe(OFFERS_TESTS.length);
  });
});
