import {extend} from './utils.js';

import {cities} from './mocks/cities.js';
import {offers} from './mocks/offers.js';

const cityActive = cities[0];

const initialState = {
  cityActive,
  offers,
};

const ActionType = {
  SELECT_CITY: `SELECT_CITY`,
  GET_OFFERS: `GET_OFFERS`,
};

const ActionCreator = {
  selectCity: (city) => ({
    type: ActionType.SELECT_CITY,
    payload: city,
  }),

  getOffers: (city) => ({
    type: ActionType.GET_OFFERS,
    payload: city,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SELECT_CITY:
      return extend(state, {cityActive: action.payload});

    case ActionType.GET_OFFERS:
      return extend(state, {offers});
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
