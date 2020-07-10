import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import OfferCard from './offer-card';
import {OFFERS_TESTS} from '../../mocks/offers-tests';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Offer Card Component`, () => {
  it(`Should mouse over be triggered and return offer`, () => {
    let result = null;
    const onMouseOver = jest.fn((selected) => {
      result = selected;
    });
    const currentOffer = OFFERS_TESTS[0];

    const offerCard = shallow(
        <OfferCard offer={currentOffer} onHover={onMouseOver} onTitleClick={() => {}} />
    );

    const card = offerCard.find(`.place-card`);

    card.prop(`onMouseEnter`)();

    expect(onMouseOver.mock.calls.length).toBe(1);
    expect(result).toEqual(currentOffer);
  });

  it(`Should title be clicked`, () => {
    let resultOfferId = null;
    const onTitleClick = jest.fn((offerId) => {
      resultOfferId = offerId;
    });
    const currentOffer = OFFERS_TESTS[0];

    const offerCard = shallow(
        <OfferCard offer={currentOffer} onHover={() => {}} onTitleClick={onTitleClick} />
    );

    const card = offerCard.find(`h2.place-card__name`);

    card.prop(`onClick`)();

    expect(onTitleClick.mock.calls.length).toBe(1);
    expect(resultOfferId).toBe(currentOffer.id);
  });
});
