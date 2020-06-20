import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.jsx';
import OFFERS from './mocks/offers';

ReactDOM.render(
    <App offers={OFFERS.filter((offer) => offer.city === `Amsterdam`)} />,
    document.querySelector(`#root`)
);
