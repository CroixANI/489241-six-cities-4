import React from 'react';
import renderer from 'react-test-renderer';

import OffersCardsListEmpty from './offers-cards-list-empty.jsx';

it(`Render Offers List Empty component`, () => {
  const tree = renderer
    .create(<OffersCardsListEmpty />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
