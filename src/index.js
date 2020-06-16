import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.js";

const offers = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
  `Wood and stone place`,
];

ReactDOM.render(
    <App titles={offers} onOfferTitleClick={() => {}} />,
    document.querySelector(`#root`)
);
