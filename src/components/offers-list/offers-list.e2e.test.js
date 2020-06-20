import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import OffersList from './offers-list';
import OFFERS_TESTS from '../../mocks/offers-tests';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Offers List Component`, () => {
  it(`Should mouse over be triggered and change component state`, () => {
    let result = null;
    const onMouseOver = jest.fn((selected) => {
      result = selected;
    });

    const offersList = mount(
        <OffersList offers={OFFERS_TESTS} />
    );

    const card = offersList.find(`.place-card`).first();

    card.simulate(`mouseover`, {});

    expect(onMouseOver.mock.calls.length).toBe(1);
    expect(result).toEqual(OFFERS_TESTS[0]);
    expect(offersList.state(`selectedOffer`)).toBe(OFFERS_TESTS[0]);
  });
});
