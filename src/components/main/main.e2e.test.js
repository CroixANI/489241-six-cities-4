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
  it(`Should offer title be clicked`, () => {
    const mainScreen = mount(
        <Main offers={OFFERS_TESTS} />
    );

    const card = mainScreen.find(`.place-card`).first();

    card.simulate(`mouseover`, {});

    expect(mainScreen.find(OffersList).state(`selectedOffer`)).toBe(OFFERS_TESTS[0]);
  });
});
