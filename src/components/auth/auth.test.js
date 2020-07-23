import React from 'react';
import renderer from 'react-test-renderer';

import Auth from './auth.jsx';
import {AuthorizationStatus} from '../../reducer/user/user';

describe(`Render Auth component`, () => {
  it(`Render Auth component with NO_AUTH authorization status`, () => {
    const tree = renderer
      .create(<Auth authorizationStatus={AuthorizationStatus.NO_AUTH} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render Auth component with AUTH authorization status`, () => {
    const tree = renderer
      .create(<Auth authorizationStatus={AuthorizationStatus.AUTH} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
