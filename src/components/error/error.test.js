import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import Error from './error.jsx';
import NameSpace from '../../reducer/name-space';
import {ActionCreator} from '../../reducer/app/app';

const mockStore = configureStore([]);
const store = mockStore({
  [NameSpace.APP]: {
    errorMessage: null,
  },
});

describe(`Render Error component`, () => {
  it(`Render error component without any error`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Error />
          </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render error component with error message`, () => {
    store.dispatch(ActionCreator.setErrorMessage(`My message`));
    const tree = renderer
      .create(
          <Provider store={store}>
            <Error />
          </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

