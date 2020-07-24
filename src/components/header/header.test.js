import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import Header from './header.jsx';
import NameSpace from '../../reducer/name-space';

const mockStore = configureStore([]);
const store = mockStore({
  [NameSpace.USER]: {
    authorizationStatus: `NO_AUTH`,
    currentUser: null,
  },
});

it(`Render Header component`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <Header />
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
