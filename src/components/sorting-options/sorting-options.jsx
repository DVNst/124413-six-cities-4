import React from 'react';
import PropTypes from 'prop-types';

import {sortingOptions} from '../../const.js';

const SortingOptions = ({optionSortingActive, onSortOptionClick, opened, onToggleShowMenu, onCloseMenu}) => {
  const _handleSortOptionClick = (optionSorting) => {
    onSortOptionClick(optionSorting);
    onCloseMenu();
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
  optionSortingActive: PropTypes.string.isRequired,
  onSortOptionClick: PropTypes.func.isRequired,
  opened: PropTypes.bool.isRequired,
  onCloseMenu: PropTypes.func.isRequired,
  onToggleShowMenu: PropTypes.func.isRequired,
};

export default SortingOptions;
