import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import Login from './login.jsx';
import NameSpace from '../../reducer/name-space';

Enzyme.configure({
  adapter: new Adapter(),
});

const mockStore = configureStore([]);
const store = mockStore({
  [NameSpace.USER]: {
    authorizationStatus: `NO_AUTH`,
    currentUser: null,
  },
});

describe(`Login Screen`, () => {
  it(`Should on login be triggered`, () => {
    const onLogin = jest.fn();
    const loginScreen = mount(
        <Provider store={store}>
          <Login onLogin={onLogin} />
        </Provider>
    );

    const form = loginScreen.find(`form`).first();

    form.simulate(`submit`, {preventDefault: () => {}});

    expect(onLogin).toHaveBeenCalledTimes(1);
  });
});
