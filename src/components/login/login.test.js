import React from 'react';
import renderer from 'react-test-renderer';

import Login from './login.jsx';

it(`Render Login component`, () => {
  const tree = renderer
    .create(<Login onLogin={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
