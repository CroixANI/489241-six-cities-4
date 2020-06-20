import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import OfferCard from './offer-card';
import OFFERS_TESTS from '../../mocks/offers-tests';

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
        <OfferCard offer={currentOffer} onHover={onMouseOver} />
    );

    const card = offerCard.find(`.place-card`);

    card.prop(`onMouseOver`)();

    expect(onMouseOver.mock.calls.length).toBe(1);
    expect(result).toEqual(currentOffer);
  });
});
