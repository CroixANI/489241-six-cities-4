import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import OfferCard from './offer-card';
import OFFERS from '../../mocks/offers';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Offer Card Component`, () => {
  it(`Should mouse over be triggered`, () => {
    const onMouseOver = jest.fn();

    const offerCard = shallow(
        <OfferCard offer={OFFERS[0]} onHover={onMouseOver} />
    );

    const card = offerCard.find(`.place-card`);

    card.simulate(`onMouseOver`);

    expect(onMouseOver.mock.calls.length).toBe(1);
  });
});
