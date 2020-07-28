import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {Router} from 'react-router-dom';

import history from '../../history';
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
          <Router history={history}>
            <Header />
          </Router>
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
