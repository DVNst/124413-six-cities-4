import {extend} from './utils.js';

import {cities} from './mocks/cities.js';
import {offers} from './mocks/offers.js';
import {sortingOptions} from './const.js';

const initialState = {
  cityActive: cities[0],
  offers,
  optionSortingActive: Object.values(sortingOptions)[0],
  offerScreen: null,
};

const ActionType = {
  SELECT_CITY: `SELECT_CITY`,
  SET_OPTION_SORT: `SET_OPTION_SORT`,
  SET_OFFER_SCREEN: `SET_OFFER_SCREEN`,
};

const ActionCreator = {
  selectCity: (city) => ({
    type: ActionType.SELECT_CITY,
    payload: city,
  }),

  setOptionSort: (option) => ({
    type: ActionType.SET_OPTION_SORT,
    payload: option,
  }),

  setOfferScreen: (offer) => ({
    type: ActionType.SET_OFFER_SCREEN,
    payload: offer,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SELECT_CITY:
      return extend(state, {cityActive: action.payload});

    case ActionType.SET_OPTION_SORT:
      return extend(state, {optionSortingActive: action.payload});

    case ActionType.SET_OFFER_SCREEN:
      return extend(state, {offerScreen: action.payload});
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
