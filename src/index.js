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

const onUnauthorized = () => {
  store.dispatch(UserActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(UserOperationCreator.checkAuth())
  .then(() => store.dispatch(DataOperationCreator.loadHotels()));

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
