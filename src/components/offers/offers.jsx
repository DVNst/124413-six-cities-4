import React from "react";
import PropTypes from "prop-types";
import Offer from "../offer/offer.jsx";

const Offers = (props) => {
  const {offers, onOfferTitleClick} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) =>
        <Offer
          key={offer.id}
          offer={offer}
          onOfferTitleClick={onOfferTitleClick}
        />
      )}
    </div>
  );
};

Offers.propTypes = {
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
  onOfferTitleClick: PropTypes.func.isRequired
};

export default Offers;
