import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import OffersList from './offers-list';
import OfferCard from '../offer-card/offer-card.jsx';
import OFFERS_TESTS from '../../mocks/offers-tests';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Offers List Component`, () => {
  it(`Should mouse over be triggered and change component state`, () => {
    const offersList = mount(
        <OffersList offers={OFFERS_TESTS} />
    );

    const card = offersList.find(`.place-card`).first();

    card.simulate(`mouseover`, {});

    expect(offersList.state(`selectedOffer`)).toBe(OFFERS_TESTS[0]);
    expect(offersList.find(OfferCard).length).toBe(OFFERS_TESTS.length);
  });
});
