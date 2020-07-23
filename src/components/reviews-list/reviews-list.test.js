import React from 'react';
import renderer from 'react-test-renderer';

import ReviewsList from './reviews-list';
import {OFFERS_TESTS} from '../../mocks/offers-tests';
import {AuthorizationStatus} from '../../reducer/user/user';

describe(`Render Review List component`, () => {
  it(`Render Reviews List component for authenticated user`, () => {
    const tree = renderer
      .create(<ReviewsList reviews={OFFERS_TESTS[0].reviews} authorizationStatus={AuthorizationStatus.AUTH} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render Reviews List component for not authenticated user`, () => {
    const tree = renderer
      .create(<ReviewsList reviews={OFFERS_TESTS[0].reviews} authorizationStatus={AuthorizationStatus.NO_AUTH} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
