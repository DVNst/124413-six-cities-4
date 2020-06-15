import React from "react";
import PropTypes from "prop-types";

import Main from "../main/main.jsx";

const App = (props) => {
  const {cities, offersCount, offers} = props;

  const handleOfferTitleClick = () => {};

  return (
    <Main
      cities={cities}
      offers = {offers}
      offersCount={offersCount}
      onOfferTitleClick={handleOfferTitleClick}
    />
  );
};

App.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
  })).isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    placeName: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    period: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    mark: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    coordinates: PropTypes.arrayOf(PropTypes.number).isRequired
  })).isRequired,
  offersCount: PropTypes.number.isRequired
};

export default App;
