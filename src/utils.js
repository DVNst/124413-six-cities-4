import {sortingOptions} from "./const.js";

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const filteredOffers = (offers, optionName) => {
  switch (optionName) {
    case sortingOptions.POPULAR:
      return offers;
    case sortingOptions.PRICE_LOW:
      return offers.slice().sort((offerPrev, offerNext) => (offerPrev.price > offerNext.price) ? 1 : -1);
    case sortingOptions.PRICE_HIGH:
      return offers.slice().sort((offerPrev, offerNext) => (offerPrev.price > offerNext.price) ? -1 : 1);
    case sortingOptions.RATED:
      return offers.slice().sort((offerPrev, offerNext) => (offerPrev.rating > offerNext.rating) ? -1 : 1);
    default:
      return offers;
  }
};
