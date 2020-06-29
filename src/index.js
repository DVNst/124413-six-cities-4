import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

import offers from "./mocks/offers.js";
import {cities} from "./mocks/cities.js";
import {reviews} from "./mocks/reviews.js";

const offersCount = 312;

ReactDOM.render(
    <App
      cities={cities}
      offersCount={offersCount}
      offers = {offers}
      reviews={reviews}
    />,
    document.querySelector(`#root`)
);
