import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';

import history from '../../history';
import {Auth} from './auth.jsx';
import {AuthorizationStatus} from '../../reducer/user/user';

describe(`Render Auth component`, () => {
  it(`Render Auth component with NO_AUTH authorization status`, () => {
    const tree = renderer
      .create(
          <Router history={history}>
            <Auth authorizationStatus={AuthorizationStatus.NO_AUTH} />
          </Router>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render Auth component with AUTH authorization status`, () => {
    const tree = renderer
      .create(
          <Router history={history}>
            <Auth authorizationStatus={AuthorizationStatus.AUTH} currentUserEmail={`Oliver.conner@gmail.com`} />
          </Router>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
