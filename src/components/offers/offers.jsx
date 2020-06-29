import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Offer from "../offer/offer.jsx";

class Offers extends PureComponent {
  constructor(props) {
    super(props);
    this._handleOfferCardHover = this._handleOfferCardHover.bind(this);

    this.state = {
      offerHover: null,
    };
  }

  _handleOfferCardHover(offer) {
    this.setState({
      offerHover: offer,
    });
  }

  render() {
    const {offers, onOfferTitleClick} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {/* <div className="near-places__list places__list"> near-places__card*/}
        {offers.map((offer) =>
          <Offer
            key={offer.id}
            offer={offer}
            onOfferTitleClick={onOfferTitleClick}
            onOfferCardHover={this._handleOfferCardHover}
          />
        )}
      </div>
    );
  }
}

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
};

export default Offers;
