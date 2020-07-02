import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Offer from '../offer/offer.jsx';

const Offers = ({offers, onOfferTitleClick, onOfferCardHover, offerclassName}) => {
  return (
    <Fragment>
      {offers.map((offer) =>
        <Offer
          key={offer.id}
          offer={offer}
          onOfferTitleClick={onOfferTitleClick}
          onOfferCardHover={onOfferCardHover}
          offerclassName={offerclassName}
        />
      )}
    </Fragment>
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
  onOfferTitleClick: PropTypes.func.isRequired,
  onOfferCardHover: PropTypes.func.isRequired,
  offerclassName: PropTypes.string.isRequired,
};

export default Offers;
