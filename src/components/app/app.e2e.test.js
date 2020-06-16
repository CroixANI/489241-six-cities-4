import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "./app";

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

describe(`App Component`, () => {
  it(`Should offer title be clicked`, () => {
    const onOfferTitleClick = jest.fn();

    const appComponent = mount(
        <App titles={titles} onOfferTitleClick={onOfferTitleClick} />
    );

    const allTitles = appComponent.find(`h2.place-card__name`);

    allTitles.forEach((title) => title.simulate(`click`, {}));

    expect(onOfferTitleClick.mock.calls.length).toBe(titles.length);
  });
});
