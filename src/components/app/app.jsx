import React, {PureComponent} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import PropTypes from "prop-types";

import Main from "../main/main.jsx";
import OfferCard from "../offer-card/offer-card.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this._handleOfferTitleClick = this._handleOfferTitleClick.bind(this);
    this._renderOfferScreen = this._renderOfferScreen.bind(this);

    this.state = {
      offerScreen: false,
    };
  }

  _handleOfferTitleClick(offer) {
    this.setState({
      offerScreen: offer,
    });
  }

  _renderOfferScreen() {
    const {offerScreen} = this.state;
    const {cities, offersCount, offers} = this.props;

    if (offerScreen) {
      return (
        <OfferCard
          offer={offerScreen}
        />
      );
    } else {
      return (
        <Main
          cities={cities}
          offers={offers}
          offersCount={offersCount}
          onOfferTitleClick={this._handleOfferTitleClick}
        />
      );
    }
  }

  render() {
    const {offers} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderOfferScreen()}
          </Route>
          <Route exact path="/offer-card">
            <OfferCard
              offer={offers[0]}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

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
