import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Main from "./main";

Enzyme.configure({
  adapter: new Adapter(),
});

const titles = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
  `Wood and stone place`,
];

describe(`Main Screen`, () => {
  it(`Should offer title be clicked`, () => {
    const onOfferTitleClick = jest.fn();

    const mainScreen = shallow(
        <Main titles={titles} onOfferTitleClick={onOfferTitleClick} />
    );

    const allTitles = mainScreen.find(`h2.place-card__name`);

    allTitles.forEach((title) => title.simulate(`click`));

    expect(onOfferTitleClick.mock.calls.length).toBe(titles.length);
  });
});
