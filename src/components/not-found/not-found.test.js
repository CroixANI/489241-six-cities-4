import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';

import history from '../../history';
import NotFound from './not-found.jsx';

it(`Render Not Found component`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <NotFound />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
