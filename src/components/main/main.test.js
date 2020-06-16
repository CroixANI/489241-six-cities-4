import React from 'react';
import renderer from 'react-test-renderer';

import Main from './Main.js';

const titles = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
  `Wood and stone place`,
];

it(`Render Main component`, () => {
  const tree = renderer
    .create(<Main titles={titles} onOfferTitleClick={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
