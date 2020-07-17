import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer.js';

import Main from '../main/main.jsx';
import OfferCard from '../offer-card/offer-card.jsx';

import {offers as offersForCard} from '../../mocks/offers.js';

const App = ({cities, offers, cityActive, onLocationClick, onSortOptionClick, optionSortingActive, reviews, offerScreen, onOfferTitleClick}) => {

  const _getReviews = (offersId) => {
    return reviews.filter((review) => review.offersId === offersId);
  };

  const _renderOfferScreen = () => {
    if (offerScreen) {
      return (
        <OfferCard
          offer={offerScreen}
          reviews={_getReviews(offerScreen.id)}
          onOfferTitleClick={onOfferTitleClick}
        />
      );
    } else {
      return (
        <Main
          cities={cities}
          offers={offers}
          onOfferTitleClick={onOfferTitleClick}
          cityActive={cityActive}
          onLocationClick={onLocationClick}
          onSortOptionClick={onSortOptionClick}
          optionSortingActive={optionSortingActive}
        />
      );
    }
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {_renderOfferScreen()}
        </Route>
        <Route exact path="/offer-card">
          {(offers) &&
            <OfferCard
              offer={offersForCard[0]}
              reviews={_getReviews(offersForCard[0].id)}
              onOfferTitleClick={onOfferTitleClick}
            />
          }
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

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
  offerScreen: PropTypes.shape({
    id: PropTypes.number,
    city: PropTypes.string,
    placeName: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    period: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    mark: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    coordinates: PropTypes.arrayOf(PropTypes.number).isRequired
  }),
  onOfferTitleClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  cityActive: state.cityActive,
  optionSortingActive: state.optionSortingActive,
  offerScreen: state.offerScreen,
});

const mapDispatchToProps = (dispatch) => ({
  onLocationClick(city) {
    dispatch(ActionCreator.selectCity(city));
    dispatch(ActionCreator.getOffers(city));
  },
  onSortOptionClick(option) {
    dispatch(ActionCreator.setOptionSort(option));
  },
  onOfferTitleClick(offer) {
    dispatch(ActionCreator.setOfferScreen(offer));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
