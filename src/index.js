import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

import offers from "./mocks/offers.js";

const offersCount = 312;

const cities = [
  {name: `Paris`, active: false},
  {name: `Cologne`, active: false},
  {name: `Brussels`, active: false},
  {name: `Amsterdam`, active: true},
  {name: `Hamburg`, active: false},
  {name: `Dusseldorf`, active: false},
];

ReactDOM.render(
    <App
      cities={cities}
      offersCount={offersCount}
      offers = {offers}
    />,
    document.querySelector(`#root`)
);
