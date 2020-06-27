import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

import offers from "./mocks/offers.js";
import {cities} from "./mocks/cities.js";

const offersCount = 312;

ReactDOM.render(
    <App
      cities={cities}
      offersCount={offersCount}
      offers = {offers}
    />,
    document.querySelector(`#root`)
);
