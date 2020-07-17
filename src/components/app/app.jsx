import React, {PureComponent} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer.js';

import Main from '../main/main.jsx';
import OfferCard from '../offer-card/offer-card.jsx';

import {offers as offersForCard} from '../../mocks/offers.js';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this._handleOfferTitleClick = this._handleOfferTitleClick.bind(this);
    this._renderOfferScreen = this._renderOfferScreen.bind(this);
    this._getReviews = this._getReviews.bind(this);

    this.state = {
      offerScreen: false,
    };
  }

  _handleOfferTitleClick(offer) {
    this.setState({
      offerScreen: offer,
    });
  }

  _getReviews(offersId) {
    const {reviews} = this.props;

    return reviews.filter((review) => review.offersId === offersId);
  }

  _renderOfferScreen() {
    const {offerScreen} = this.state;
    const {cities, offers, cityActive, onLocationClick, onSortOptionClick, optionSortingActive} = this.props;

    if (offerScreen) {
      return (
        <OfferCard
          offer={offerScreen}
          reviews={this._getReviews(offerScreen.id)}
          onOfferTitleClick={this._handleOfferTitleClick}
        />
      );
    } else {
      return (
        <Main
          cities={cities}
          offers={offers}
          onOfferTitleClick={this._handleOfferTitleClick}
          cityActive={cityActive}
          onLocationClick={onLocationClick}
          onSortOptionClick={onSortOptionClick}
          optionSortingActive={optionSortingActive}
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
            {(offers) &&
              <OfferCard
                offer={offersForCard[0]}
                reviews={this._getReviews(offersForCard[0].id)}
                onOfferTitleClick={this._handleOfferTitleClick}
              />
            }
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    coordinates: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
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
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    offersId: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    dateTime: PropTypes.string.isRequired,
  })).isRequired,
  cityActive: PropTypes.shape({
    name: PropTypes.string.isRequired,
    coordinates: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  }),
  onLocationClick: PropTypes.func.isRequired,
  onSortOptionClick: PropTypes.func.isRequired,
  optionSortingActive: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  cityActive: state.cityActive,
  optionSortingActive: state.optionSortingActive,
});

const mapDispatchToProps = (dispatch) => ({
  onLocationClick(city) {
    dispatch(ActionCreator.selectCity(city));
    dispatch(ActionCreator.getOffers(city));
  },
  onSortOptionClick(option) {
    dispatch(ActionCreator.setOptionSort(option));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
