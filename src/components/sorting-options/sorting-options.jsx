import React from 'react';
import PropTypes from 'prop-types';

const SortingOptions = ({offers, onSortOptionClick}) => {
  const _handleShowSortMenu = (evt) => {
    evt.preventDefault();
    const sortMenu = document.querySelector(`.places__options`);
    sortMenu.classList.toggle(`places__options--opened`);
  };

  const _handleSortOptionClick = (evt) => {
    evt.preventDefault();
    const sortMenu = document.querySelector(`.places__options`);
    const sortMenuTitle = document.getElementsByClassName(`places__sorting-type`);

    // вставляем значение выбраной сортировки в childNodes[0], чтобы не удалить декоративную стрелку
    sortMenuTitle[0].childNodes[0].textContent = evt.target.textContent;

    // удаляем класс выделения выбранной опции сортировки у предыдущей выбраной опции
    const SortOptionActive = document.querySelector(`.places__option--active`);
    SortOptionActive.classList.remove(`places__option--active`);

    // добавляем класс выделения выбранной опции сортировки
    evt.target.classList.add(`places__option--active`);

    // удаляем класс для отображения списка опций сортировки
    sortMenu.classList.remove(`places__options--opened`);

    // const sortedOffers = filteredOffers(evt.target.textContent);
    const sortedOffers = filteredOffers(evt.target.getAttribute(`data-value`));
    onSortOptionClick(sortedOffers);
  };

  const filteredOffers = (value) => {
    switch (value) {
      case `Popular`:
        return offers;
      case `Price: low to high`:
        return offers.slice().sort((offerPrev, offerNext) => (offerPrev.price > offerNext.price) ? 1 : -1);
      case `Price: high to low`:
        return offers.slice().sort((offerPrev, offerNext) => (offerPrev.price > offerNext.price) ? -1 : 1);
      case `Top rated first`:
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
        onClick={(evt) => _handleShowSortMenu(evt)}
      >
        Popular
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        className="places__options places__options--custom"
        onClick={(evt) => _handleSortOptionClick(evt)}
      >
        <li className="places__option places__option--active" tabIndex={0} data-value="Popular">Popular</li>
        <li className="places__option" tabIndex={0} data-value="Price: low to high">Price: low to high</li>
        <li className="places__option" tabIndex={0} data-value="Price: high to low">Price: high to low</li>
        <li className="places__option" tabIndex={0} data-value="Top rated first">Top rated first</li>
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
  onSortOptionClick: PropTypes.func.isRequired,
};

export default SortingOptions;
