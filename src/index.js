import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './components/app/app.jsx';
import OFFERS from './mocks/offers';
import {reducer} from './reducer';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <App offers={OFFERS.filter((offer) => offer.location.city === `Amsterdam`)} />
    </Provider>,
    document.querySelector(`#root`)
);
