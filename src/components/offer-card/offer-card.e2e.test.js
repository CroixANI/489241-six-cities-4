import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Router, Link} from 'react-router-dom';
import {createMemoryHistory} from "history";

import OfferCard from './offer-card';
import {OFFERS_TESTS} from '../../mocks/offers-tests';
import {APP_ROUTE} from '../../data/constants';

const memoryHistory = createMemoryHistory();

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

    const offerCard = mount(
        <Router history={memoryHistory}>
          <OfferCard offer={currentOffer} onHover={onMouseOver} onFavoriteToggle={() => {}} />
        </Router>
    );

    const card = offerCard.find(`.place-card`).first();

    card.simulate(`mouseenter`);

    expect(onMouseOver.mock.calls.length).toBe(1);
    expect(result).toEqual(currentOffer);
  });

  it(`Should title reference to details page`, () => {
    const currentOffer = OFFERS_TESTS[0];

    const offerCard = mount(
        <Router history={memoryHistory}>
          <OfferCard offer={currentOffer} onHover={() => {}} onFavoriteToggle={() => {}} />
        </Router>
    );

    const link = offerCard.find(`h2.place-card__name`).find(Link).first();

    expect(link.props().to).toBe(`${APP_ROUTE.OFFER}/${currentOffer.id}`);
  });

  it(`Should favorite button be clicked`, () => {
    let resultOffer = null;
    const onFavoriteClick = jest.fn((offer) => {
      resultOffer = offer;
    });
    const currentOffer = OFFERS_TESTS[0];

    const offerCard = mount(
        <Router history={memoryHistory}>
          <OfferCard offer={currentOffer} onHover={() => {}} onFavoriteToggle={onFavoriteClick} />
        </Router>
    );

    const card = offerCard.find(`button.place-card__bookmark-button`);

    card.simulate(`click`, {});

    expect(onFavoriteClick.mock.calls.length).toBe(1);
    expect(resultOffer).toBe(currentOffer);
  });
});
