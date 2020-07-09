import React from 'react';
import PropTypes from 'prop-types';

import {sortingOptions} from '../../const.js';

const SortingOptions = ({offers, optionSortingActive, onSortOptionClick, opened, onToggleShowMenu, onCloseMenu}) => {
  const _handleSortOptionClick = (optionSorting) => {
    onSortOptionClick(optionSorting, filteredOffers(optionSorting));
    onCloseMenu();
  };

  const filteredOffers = (optionName) => {
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

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type" tabIndex={0}
        onClick={() => onToggleShowMenu()}
      >
        {optionSortingActive}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        className={
          `places__options places__options--custom` +
          (opened ? ` places__options--opened` : ``)
        }
      >
        {Object.values(sortingOptions).map((optionSorting) => (
          <li
            className={
              `places__option` +
              (optionSortingActive === optionSorting ? ` places__option--active` : ``)}
            tabIndex={0}
            onClick={() => _handleSortOptionClick(optionSorting)}
            key={optionSorting}
          >
            {optionSorting}
          </li>
        ))}
      </ul>
    </form>
  );
};

SortingOptions.propTypes = {
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
  optionSortingActive: PropTypes.string.isRequired,
  onSortOptionClick: PropTypes.func.isRequired,
  opened: PropTypes.bool.isRequired,
  onCloseMenu: PropTypes.func.isRequired,
  onToggleShowMenu: PropTypes.func.isRequired,
};

export default SortingOptions;
