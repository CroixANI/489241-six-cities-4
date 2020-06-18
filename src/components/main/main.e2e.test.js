import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Main from "./main";
import OFFERS_TITLES from '../../mocks/offers-titles';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Main Screen`, () => {
  it(`Should offer title be clicked`, () => {
    const onOfferTitleClick = jest.fn();

    const mainScreen = shallow(
        <Main titles={OFFERS_TITLES} onOfferTitleClick={onOfferTitleClick} />
    );

    const allTitles = mainScreen.find(`h2.place-card__name`);

    allTitles.forEach((title) => title.simulate(`click`));

    expect(onOfferTitleClick.mock.calls.length).toBe(OFFERS_TITLES.length);
  });
});
