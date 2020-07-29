import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import App from './components/app/app.jsx';
import {createAPI} from './api';
import {ActionCreator as UserActionCreator, OperationCreator as UserOperationCreator, AuthorizationStatus} from './reducer/user/user';
import {OperationCreator as DataOperationCreator} from './reducer/data/data';
import reducer from './reducer/reducer';
import {APP_ROUTE} from './data/constants.js';
import history from './history';

const onUnauthorized = (url) => {
  store.dispatch(UserActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
  if (url !== `${APP_ROUTE.LOGIN}`) {
    history.push(APP_ROUTE.LOGIN);
  }
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(UserOperationCreator.checkAuth());
store.dispatch(DataOperationCreator.loadHotels());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
