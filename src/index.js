import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.js";

ReactDOM.render(
    <App offersCount={312} />,
    document.querySelector(`#root`)
);
