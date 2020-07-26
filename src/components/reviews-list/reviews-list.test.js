import React from 'react';
import renderer from 'react-test-renderer';

import ReviewsList from './reviews-list';
import {REVIEWS_TEST} from '../../mocks/offers-tests';
import {AuthorizationStatus} from '../../reducer/user/user';

describe(`Render Review List component`, () => {
  it(`Render Reviews List component for authenticated user`, () => {
    const tree = renderer
      .create(<ReviewsList reviews={REVIEWS_TEST} authorizationStatus={AuthorizationStatus.AUTH} onReviewSubmit={() => {}} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render Reviews List component for not authenticated user`, () => {
    const tree = renderer
      .create(<ReviewsList reviews={REVIEWS_TEST} authorizationStatus={AuthorizationStatus.NO_AUTH} onReviewSubmit={() => {}} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
