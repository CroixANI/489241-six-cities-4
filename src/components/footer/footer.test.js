import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';

import history from '../../history';
import Footer from './footer.jsx';

it(`Render Footer component`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <Footer />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
