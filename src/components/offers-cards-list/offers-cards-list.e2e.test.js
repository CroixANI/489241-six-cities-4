import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {OffersCardsList} from './offers-cards-list';
import OfferCard from '../offer-card/offer-card.jsx';
import {OFFERS_TESTS} from '../../mocks/offers-tests';
import {SORT_TYPE} from '../../data/constants';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Offers List Component`, () => {
  it(`Should mouse over be triggered and change component state`, () => {
    const offersList = mount(
        <OffersCardsList sortType={SORT_TYPE.POPULAR} offers={OFFERS_TESTS} onOfferTitleClick={() => {}} onSort={() => {}} />
    );

    const card = offersList.find(`.place-card`).first();

    card.simulate(`mouseenter`, {});

    expect(offersList.state(`selectedOffer`)).toBe(OFFERS_TESTS[0]);
    expect(offersList.find(OfferCard).length).toBe(OFFERS_TESTS.length);
  });

  it(`Should offers titles be clicked`, () => {
    const onOfferTitleClick = jest.fn();

    const offersList = mount(
        <OffersCardsList sortType={SORT_TYPE.POPULAR} offers={OFFERS_TESTS} onOfferTitleClick={onOfferTitleClick} onSort={() => {}} />
    );

    const allTitles = offersList.find(`h2.place-card__name`);

    allTitles.forEach((title) => title.simulate(`click`, {}));

    expect(onOfferTitleClick.mock.calls.length).toBe(OFFERS_TESTS.length);
  });
});
